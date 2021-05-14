import { Joi } from 'celebrate';

const authenticateUserValidation = {
  body: {
    email: Joi.string().required(),
    password: Joi.string().required(),
  },
};

export default authenticateUserValidation;
