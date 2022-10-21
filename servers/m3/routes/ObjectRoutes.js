const express = require('express');
const { ObjectsController } = require('../controllers');

const router = express.Router();

router.post('/sort', ObjectsController.sort);

module.exports = router;
