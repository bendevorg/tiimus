/* eslint-disable no-console */
const dotenv = require('dotenv');

dotenv.config();

const express = require('express');

const app = express();

app.use('/', express.static('dist'));
app.use(['/users/*', '/user/*', '/projects/*', '/project/*'], express.static('dist/index.html'));

module.exports = app;
