const fs = require('fs');
const path = require('path');
const Property = require('../models/Property');
const { isDbConnected } = require('../config/db');

const JSON_PATH = path.join(__dirname, '../data/properties.json');

const getLocalProperties = () => {
  try {
    if (fs.existsSync(JSON_PATH)) {
      const raw = fs.readFileSync(JSON_PATH, 'utf8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("Error reading local properties.json:", err);
  }
  return [];
};

const saveLocalProperties = (properties) => {
  try {
    fs.writeFileSync(JSON_PATH, JSON.stringify(properties, null, 2), 'utf8');
  } catch (err) {
    console.error("Error writing local properties.json:", err);
  }
};

// @desc    Get all properties
// @route   GET /api/properties
const getProperties = async (req, res, next) => {
  try {
    if (isDbConnected()) {
      const properties = await Property.find().sort({ createdAt: -1 });
      res.status(200).json({ success: true, count: properties.length, data: properties });
    } else {
      const properties = getLocalProperties();
      // Sort by createdAt descending
      properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      res.status(200).json({ success: true, count: properties.length, data: properties });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Get single property
// @route   GET /api/properties/:id
const getPropertyById = async (req, res, next) => {
  try {
    if (isDbConnected()) {
      const property = await Property.findById(req.params.id);
      if (!property) {
        return res.status(404).json({ success: false, message: 'Property not found' });
      }
      res.status(200).json({ success: true, data: property });
    } else {
      const properties = getLocalProperties();
      const property = properties.find(p => p._id === req.params.id || p.id === Number(req.params.id) || p.id === req.params.id);
      if (!property) {
        return res.status(404).json({ success: false, message: 'Property not found' });
      }
      res.status(200).json({ success: true, data: property });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Create property
// @route   POST /api/properties
const createProperty = async (req, res, next) => {
  try {
    if (isDbConnected()) {
      const property = await Property.create(req.body);
      res.status(201).json({ success: true, data: property });
    } else {
      const properties = getLocalProperties();
      const newProperty = {
        _id: new Date().getTime().toString(16) + Math.random().toString(16).slice(2, 8),
        id: properties.length > 0 ? Math.max(...properties.map(p => p.id || 0)) + 1 : 1,
        ...req.body,
        createdAt: new Date().toISOString()
      };
      properties.push(newProperty);
      saveLocalProperties(properties);
      res.status(201).json({ success: true, data: newProperty });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Update property
// @route   PUT /api/properties/:id
const updateProperty = async (req, res, next) => {
  try {
    if (isDbConnected()) {
      const property = await Property.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      
      if (!property) {
        return res.status(404).json({ success: false, message: 'Property not found' });
      }
      res.status(200).json({ success: true, data: property });
    } else {
      const properties = getLocalProperties();
      const index = properties.findIndex(p => p._id === req.params.id || p.id === Number(req.params.id) || p.id === req.params.id);
      if (index === -1) {
        return res.status(404).json({ success: false, message: 'Property not found' });
      }
      properties[index] = { ...properties[index], ...req.body };
      saveLocalProperties(properties);
      res.status(200).json({ success: true, data: properties[index] });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Delete property
// @route   DELETE /api/properties/:id
const deleteProperty = async (req, res, next) => {
  try {
    if (isDbConnected()) {
      const property = await Property.findByIdAndDelete(req.params.id);
      if (!property) {
        return res.status(404).json({ success: false, message: 'Property not found' });
      }
      res.status(200).json({ success: true, data: {} });
    } else {
      const properties = getLocalProperties();
      const index = properties.findIndex(p => p._id === req.params.id || p.id === Number(req.params.id) || p.id === req.params.id);
      if (index === -1) {
        return res.status(404).json({ success: false, message: 'Property not found' });
      }
      properties.splice(index, 1);
      saveLocalProperties(properties);
      res.status(200).json({ success: true, data: {} });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  getLocalProperties
};

