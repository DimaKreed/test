const express = require('express');
const { ObjectsController } = require('../controllers');

const router = express.Router();

router.get('/', ObjectsController.getObjectsWithStats);
router.post('/', ObjectsController.generateObject);
router.post('/sort', ObjectsController.sort);

module.exports = router;
