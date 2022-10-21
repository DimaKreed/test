const express = require('express');
const { ObjectsController } = require('../controllers');
const { ObjectsMiddlewares } = require('../middlewares');

const router = express.Router();

router.get('/', ObjectsController.getObjects);
router.post('/', ObjectsMiddlewares.validateObject, ObjectsController.generateObject);
router.post('/sortTime', ObjectsController.saveSortTime);

module.exports = router;
