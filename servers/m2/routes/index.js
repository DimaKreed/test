const express = require('express');

const ObjectRoutes = require('./ObjectRoutes');

const router = express.Router();
router.use('/', ObjectRoutes);

module.exports = router;
