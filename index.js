require('dotenv').config();
const express = require('express');
const { PORT } = require('./config/keys');

const app = express();

app.use(express.json());
require('./services/dbConnect')();

app.use('/hey', (req, res) => {
  res.send('Ho!');
});

app.use('/upload', require('./routes/upload'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
