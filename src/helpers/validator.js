/* eslint-disable no-useless-escape */
import Joi from '@hapi/joi';
import resMsg from './responseMessages';

const validUUID = /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/;
const validAmount = /^([0-9]+\.[0-9]{1,2}?\ EUR|[0-9]+\.[0-9]{1,2}?|[0-9]+\ EUR|[0-9]+)$/i;

export default {
  name: Joi.string().required().trim(),
  password: Joi.string().required(),
  email: Joi.string().email().required().trim(),
  id: Joi.string().required()
    .regex(validUUID).error(() => ({ message: resMsg.invalidId })),
  amount: Joi.string().required()
    .regex(validAmount).error(() => ({ message: resMsg.invalidAmount })),
  date: Joi.date().iso().greater(new Date()).required()
    .error(() => ({ message: resMsg.invalidDate })),
  reason: Joi.string().required(),
};
