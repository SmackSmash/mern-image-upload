const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const Image = mongoose.model(
  'image',
  new mongoose.Schema({
    path: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  })
);

const validateImage = Joi.object().keys({
  path: Joi.string().required(),
  thumbnail: Joi.string().required()
});

module.exports = {
  Image,
  validateImage
};
