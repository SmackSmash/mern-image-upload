const router = require('express').Router();
const multer = require('multer');

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, './images'),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
  })
});

router.post('/', upload.single('image'), (req, res) => {
  console.log(req.body);
  res.send({ message: 'Image upload successful' });
});

module.exports = router;
