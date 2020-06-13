const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

let port = process.env.PORT;
if (port == null || port == '') port = 8000;
app.use(express.json());
app.use(require('./routes/index.js'));

app.listen(port, () => console.log('listening on port 8000'));
