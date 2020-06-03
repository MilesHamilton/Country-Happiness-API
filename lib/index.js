const express = require('express');
const app = new express();

app.use('/', require('./routes'));

app.listen(3000, () => {
  console.log('listening...');
});
