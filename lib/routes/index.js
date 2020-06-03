const express = require('express');
const app = express();

app.use('/happiness', require('./happiness'));

module.exports = app;
