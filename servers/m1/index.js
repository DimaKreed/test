require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const { PORT } = require('./configs/common');
const connectDB = require('./configs/dbConn');
const routes = require('./routes');

// connect to mongodb
connectDB();

mongoose.connection.once('open', () => {
  console.log('Successfully connected to mongodb');
});

const app = express();
app.use(express.json());

// root router
app.use('/', routes);

app.listen(PORT, () => { console.log(`App started on port ${PORT}`); });
