const { m1Instanse, m2Instanse } = require('../configs/axios');

module.exports = {
  getObjectsWithStats: async (req, res) => {
    try {
      const { data: allObjectsWithStats } = await m1Instanse.get('/objects');

      res.json(allObjectsWithStats);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  generateObject: async (req, res) => {
    const { maxDepth, rootKeyCount } = req.body;

    try {
      const { data: createdObject } = await m1Instanse.post('/objects', { maxDepth, rootKeyCount });

      res.json(createdObject);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  sort: async (req, res) => {
    const { objects } = req.body;

    const { data: sortedObjects } = await m2Instanse.post('/sort', { objects });
    res.json(sortedObjects);
  },
};
