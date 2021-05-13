import { Joi } from 'celebrate';

const createUserValidation = {
  body: {
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  },
};

export default createUserValidation;
