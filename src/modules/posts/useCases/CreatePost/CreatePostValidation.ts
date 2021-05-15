import { Joi } from 'celebrate';

const createPostValidation = {
  body: {
    title: Joi.string().required(),
    content: Joi.string().required(),
  },
};

export default createPostValidation;
