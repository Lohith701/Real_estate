const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    isConnected = true;
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    console.log(`Falling back to local properties JSON database.`);
    isConnected = false;
  }
};

const isDbConnected = () => isConnected;

module.exports = { connectDB, isDbConnected };

