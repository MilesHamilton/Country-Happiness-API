const express = require('express');
const app = express();

app.use('/', require('./happiness'));
app.use('/page', require('./happinessPage'));
module.exports = app;
