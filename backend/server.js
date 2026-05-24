require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Route imports
const propertyRoutes = require('./routes/propertyRoutes');
const leadRoutes = require('./routes/leadRoutes');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors({
  origin: 'https://bluecraftproperties.vercel.app',
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
