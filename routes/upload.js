const router = require('express').Router();
const multer = require('multer');
const Jimp = require('jimp');
const { Image } = require('../models/images');

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, './images'),
    filename: (req, file, cb) => {
      const filename = `${Date.now()}-${file.originalname}`;
      req.body.filename = filename;
      cb(null, filename);
    }
  })
});

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const image = await Jimp.read(`./images/${req.body.filename}`);
    image.scaleToFit(256, 256).write(`./thumbnails/${req.body.filename}`);
    const galleryEntry = new Image({
      path: `/images/${req.body.filename}`,
      thumbnail: `/thumbnails/${req.body.filename}`
    });
    await galleryEntry.save();
    res.send({ message: 'Image upload successful' });
  } catch ({ message }) {
    console.error(message);
    res.status(500).send({ message: 'Internal server error' });
  }
});

module.exports = router;
