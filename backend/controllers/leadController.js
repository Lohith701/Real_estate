const Lead = require('../models/Lead');

// @desc    Store new lead data
// @route   POST /api/leads
const createLead = async (req, res, next) => {
  try {
    const { name, phone } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ success: false, message: 'Please provide name and phone number' });
    }

    const lead = await Lead.create(req.body);
    res.status(201).json({ success: true, data: lead });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all leads
// @route   GET /api/leads
const getLeads = async (req, res, next) => {
  try {
    const leads = await Lead.find()
      .populate('propertyId', 'title location')
      .sort({ createdAt: -1 });
      
    res.status(200).json({ success: true, count: leads.length, data: leads });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createLead,
  getLeads
};
