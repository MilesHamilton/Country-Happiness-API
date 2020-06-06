// let mongoURI = '';
// if (process.env.NODE_ENV === 'production') {
//   mongoURI = process.env.DB_URL;
// } else {
//   mongoURI = 'mongodb://localhost/happiness';
// }
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:3000/happiness', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// // console.log('Connected to Atlas');
module.exports = mongoose;

// Database Connection
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_URL;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log('Connected to Atlas');
client.connect((err) => {
  const collection = client.db('happiness').collection('happinesses');
  // perform actions on the collection object
  client.close();
});
