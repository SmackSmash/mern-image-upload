const router = require('express').Router();
const { Image } = require('../models/images');

router.get('/', async (req, res) => {
  try {
    const images = await Image.find();
    res.send(images);
  } catch ({ message }) {
    console.error(message);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
