const express = require('express');
const app = new express();

app.use('/', require('./routes'));

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

module.exports = app;
