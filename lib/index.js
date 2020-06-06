// const express = require('express');
// const app = new express();

// app.use('/', require('./routes'));

// app.set('port', process.env.PORT || 5000),
//   function () {
//     console.log('listening on 5000');
//   };

// app.listen(app.get('port'), () => {
//   console.log(`✅ PORT: ${app.get('port')} 🌟`);
// });

const express = require('express');
const app = express();
let port = process.env.PORT;
if (port == null || port == '') port = 8000;
app.use(express.json());
app.use(require('./routes/index.js'));
app.listen(port, () => console.log('listening on port 8000'));
module.exports = app;
