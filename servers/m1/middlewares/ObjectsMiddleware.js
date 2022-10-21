const { ObjectCreateSchema } = require('../validators');

module.exports = {
  validateObject: async (req, res, next) => {
    const { error } = ObjectCreateSchema.validate(req.body);

    if (error) {
      res.status(400).send(error.message);
      return;
    }

    await next();
  },
};
