const express = require('express');
<<<<<<< HEAD
const app = express();
var cors = require('cors');

app.use(cors());

app.get('/products/:id', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});

app.listen(port, function () {
  console.log('CORS-enabled web server listening on port 8000');
});

let port = process.env.PORT;
if (port == null || port == '') port = 8000;
app.use(express.json());
app.use(require('./routes/index.js'));
// app.listen(port, () => console.log('listening on port 8000'));
=======
const app = new express();

app.use('/', require('./routes'));

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

>>>>>>> parent of 712028b... changed routes
module.exports = app;
