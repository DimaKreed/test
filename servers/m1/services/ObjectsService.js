const sizeof = require('object-sizeof');

const { UnsortedObjects, SortStats } = require('../schemas');
const { getObjectDepth } = require('../utils');

module.exports = {
  createObject: (object, generationTime, keyCount) => UnsortedObjects.create({
    object,
    depth: getObjectDepth(object),
    generationTime,
    keyCount,
    size: sizeof(object),
  }),
  saveStats: async (objectId, sortDuration) => {
    await SortStats.create({ objectId, sortDuration });
  },
  getObjects: async () => UnsortedObjects.aggregate([{
    $lookup: {
      from: 'sortstats',
      localField: '_id',
      foreignField: 'objectId',
      as: 'sortStats',
    },
  }]),
};
