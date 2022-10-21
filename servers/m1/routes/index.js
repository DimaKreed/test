const express = require('express');

const ObjectRoutes = require('./ObjectRoutes');

const router = express.Router();
router.use('/objects', ObjectRoutes);

module.exports = router;
