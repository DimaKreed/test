const { performance } = require('perf_hooks');

const { ObjectsService } = require('../services');
const { generateObject } = require('../utils');

module.exports = {
  generateObject: async (req, res) => {
    const { maxDepth, rootKeyCount } = req.body;

    // measuring time of generating object
    const startTime = performance.now();
    const object = await generateObject(rootKeyCount, maxDepth);
    const endTime = performance.now();

    const savedObj = await ObjectsService.createObject(object, endTime - startTime, rootKeyCount);
    res.json(savedObj);
  },
  getObjects: async (req, res) => {
    const objects = await ObjectsService.getObjects();
    res.json(objects);
  },
  saveSortTime: async (req, res) => {
    const { objects } = req.body;

    const arrayOfPromises = objects.map((obj) => ObjectsService.saveStats(obj._id, obj.timeToSort));
    await Promise.all(arrayOfPromises);

    res.json(objects);
  },
};
