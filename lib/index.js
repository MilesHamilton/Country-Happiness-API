const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// app.get('/products/:id', function (req, res, next) {
//   res.json({ msg: 'This is CORS-enabled for all origins!' });
// });

let port = process.env.PORT;
if (port == null || port == '') port = 8000;
app.use(express.json());
app.use(require('./routes/index.js'));

// app.listen(port, function () {
//   console.log('CORS-enabled web server listening on port 8000');
// });
app.listen(port, () => console.log('listening on port 8000'));
