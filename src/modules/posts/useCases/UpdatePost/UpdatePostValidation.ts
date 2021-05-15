import { Joi } from 'celebrate';

const updatePostValidation = {
  body: {
    title: Joi.string().required(),
    content: Joi.string().required(),
  },
};

export default updatePostValidation;
