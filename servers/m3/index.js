require('dotenv').config();
const express = require('express');

const { PORT } = require('./configs/common');
const routes = require('./routes');

const app = express();
app.use(express.json());

// root router
app.use('/', routes);

app.listen(PORT, () => { console.log(`App started on port ${PORT}`); });
