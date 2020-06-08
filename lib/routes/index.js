const express = require('express');
const app = express();

app.use('/', require('./happiness'));

module.exports = app;
