const { m1Instanse } = require('../configs/axios');

const { sortObject } = require('../utils');

module.exports = {
  sort: async (req, res) => {
    const { objects } = req.body;

    const sortedObjects = objects.map((obj) => sortObject(obj));

    await m1Instanse.post('/objects/sortTime', { objects: sortedObjects });

    res.json(sortedObjects);
  },
};
