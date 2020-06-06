const mongoose = require('mongoose');
const link = require('../../../password.json');
console.log(link);
console.log(process.env);
let mongoURI = '';
if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = 'mongodb://localhost/happiness';
}
mongoURI = link.password;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to Atlas');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;

// Database Connection
// const MongoClient = require('mongodb').MongoClient;
// const uri = process.env.DB_URL;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// console.log('Connected to Atlas');
// client.connect((err) => {
//   const collection = client.db('happiness').collection('happinesses');
//   // perform actions on the collection object
//   client.close();
// });
