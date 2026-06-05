const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String, required: true },
  price: { type: String, required: true },
  priceVal: { type: Number },
  location: { type: String, required: true },
  type: { type: String }, // e.g. Apartment, Villa
  bhk: { type: String },
  status: { type: String }, // e.g. Ready, Under Construction
  area: { type: String },
  image: { type: String },
  builder: { type: String },
  builderLogo: { type: String },
  description: { type: String },
  amenities: [{ type: String }],
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
}, { strict: false });

module.exports = mongoose.model('Property', propertySchema);

