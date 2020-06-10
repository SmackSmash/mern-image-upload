const router = require('express').Router();
const multer = require('multer');
const Jimp = require('jimp');

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
    res.send({ message: 'Image upload successful' });
  } catch ({ message }) {
    console.error(message);
    res.status(500).send({ message: 'Internal server error' });
  }
});

module.exports = router;
