require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { PORT } = require('./configs/common');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(cors());
// root router
app.use('/', routes);

app.listen(PORT, () => { console.log(`App started on port ${PORT}`); });
