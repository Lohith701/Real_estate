require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB, isDbConnected } = require('./config/db');

// Route imports
const propertyRoutes = require('./routes/propertyRoutes');
const leadRoutes = require('./routes/leadRoutes');

const app = express();

// Seed function
const seedIfEmpty = async () => {
  try {
    const Property = require('./models/Property');
    const count = await Property.countDocuments();
    if (count === 0) {
      console.log("Database is empty. Seeding properties from properties.json...");
      const { getLocalProperties } = require('./controllers/propertyController');
      const local = getLocalProperties();
      if (local.length > 0) {
        await Property.insertMany(local);
        console.log(`Successfully seeded database with ${local.length} properties.`);
      }
    }
  } catch (err) {
    console.error("Failed to seed database:", err);
  }
};

// Connect to Database
connectDB().then(() => {
  if (isDbConnected()) {
    seedIfEmpty();
  }
});

// Middleware
app.use(cors({
  origin: [
    'https://bluecraftproperties.vercel.app',
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:3000'
  ],
  optionsSuccessStatus: 200
}));
app.use(express.json());

// Mount Routes
app.use('/api/properties', propertyRoutes);
app.use('/api/leads', leadRoutes);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: err.message || 'Server Error' 
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

