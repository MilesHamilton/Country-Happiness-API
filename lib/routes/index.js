const express = require('express');
const app = express();

app.use('/GEThappiness', require('./GEThappiness'));
app.use('/PUThappiness', require('./PUThappiness'));
app.use('/POSThappiness', require('./POSThappiness'));
app.use('/Deletehappiness', require('./Deletehappiness'));

module.exports = app;
