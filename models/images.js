const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const Image = mongoose.model(
  'image',
  new mongoose.Schema({
    path: {
      type: String,
      required: true
    }
  })
);

const validateImage = Joi.object().keys({
  name: Joi.string().required()
});

module.exports = {
  Image,
  validateImage
};
