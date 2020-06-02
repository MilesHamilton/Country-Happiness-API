const express = require('express');
const app = new express();

app.use('/');

app.listen(3000, () => {
  console.log('listening...');
});
