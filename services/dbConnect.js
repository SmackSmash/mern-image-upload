const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/keys');

module.exports = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB');
  } catch ({ message }) {
    console.error(message);
    process.exit(1);
  }
};
