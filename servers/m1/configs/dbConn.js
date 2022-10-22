const mongoose = require('mongoose');
const { DB_URI } = require('./common');

const connectDB = async () => {
  try {
    console.log({ DB_URI });
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
