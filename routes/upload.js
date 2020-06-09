const router = require('express').Router();
const multer = require('multer');

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, './images'),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
  })
});

router.post('/', upload.single('image'), (req, res) => {
  console.log(req.body.title);
  res.send('Hello there!');
});

module.exports = router;
