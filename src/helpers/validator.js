/* eslint-disable no-useless-escape */
import Joi from '@hapi/joi';

export default {
  name: Joi.string().required().trim(),
  password: Joi.string().required(),
  email: Joi.string().email().required().trim(),
  id: Joi.number().required(),
  amount: Joi.string().required().regex(/^([0-9]+\.[0-9]{1,2}?\ EUR|[0-9]+\.[0-9]{1,2}?|[0-9]+\ EUR|[0-9]+)$/i),
  date: Joi.date().iso().greater(new Date()).required(),
  reason: Joi.string().required(),
};
