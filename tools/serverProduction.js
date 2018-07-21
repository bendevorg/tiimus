'use strict';
/* eslint-disable no-console */
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

app.use('/', express.static('dist'));

module.exports = app;
