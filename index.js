require('dotenv').config();
const express = require('express');
const path = require('path');
const { PORT } = require('./config/keys');

const app = express();

app.use(express.json());
require('./services/dbConnect')();

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/thumbnails', express.static(path.join(__dirname, 'thumbnails')));

app.use('/upload', require('./routes/upload'));
app.use('/images', require('./routes/images'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
