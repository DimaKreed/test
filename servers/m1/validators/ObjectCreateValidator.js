const Joi = require('joi');

const schema = Joi.object({
  rootKeyCount: Joi.number()
    .required()
    .integer()
    .positive()
    .min(1)
    .max(100),

  maxDepth: Joi.number()
    .required()
    .integer()
    .positive()
    .min(1)
    .max(10),

});

module.exports = { ObjectCreateSchema: schema };
