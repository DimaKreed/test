require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

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
app.use(cors());
// root router
app.use('/', routes);

app.listen(PORT, () => { console.log(`App started on port ${PORT}`); });
