import Joi from '@hapi/joi';

export default {
  name: Joi.string().required().trim(),
  password: Joi.string().required(),
  email: Joi.string().email().required().trim(),
  id: Joi.number().required(),
};
