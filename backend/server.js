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
    } else {
      // Run migration to fix image paths
      const properties = await Property.find();
      let updatedCount = 0;
      for (const prop of properties) {
        let changed = false;
        if (prop.image && prop.image.startsWith('/src/resources/')) {
          prop.image = prop.image.replace('/src/resources/', '/resources/');
          changed = true;
        }
        if (prop.images && prop.images.length > 0) {
          for (let i = 0; i < prop.images.length; i++) {
            if (prop.images[i].startsWith('/src/resources/')) {
              prop.images[i] = prop.images[i].replace('/src/resources/', '/resources/');
              changed = true;
            }
          }
        }
        if (prop.brochure && prop.brochure.startsWith('/src/resources/')) {
          prop.brochure = prop.brochure.replace('/src/resources/', '/resources/');
          changed = true;
        }
        if (changed) {
          await prop.save();
          updatedCount++;
        }
      }
      if (updatedCount > 0) {
        console.log(`Migrated image paths for ${updatedCount} properties in the database.`);
      }
    }
  } catch (err) {
    console.error("Failed to seed or migrate database:", err);
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
  origin: function(origin, callback) {
    const allowed = [
      'https://bluecraftproperties.netlify.app',
      'https://bluecraftproperties.vercel.app',
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:3000'
    ];
    // Allow requests with no origin (mobile apps, curl, Render health checks)
    if (!origin) return callback(null, true);
    // Allow any netlify.app subdomain (for deploy previews)
    if (origin.endsWith('.netlify.app') || allowed.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  optionsSuccessStatus: 200
}));
app.use(express.json());

// Health check — Render pings this to keep the server warm
app.get('/', (req, res) => res.json({ status: 'ok', service: 'BlueCraft Properties API' }));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

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

