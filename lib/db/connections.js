// let mongoURI = '';
// if (process.env.NODE_ENV === 'production') {
//   mongoURI = process.env.DB_URL;
// } else {
//   mongoURI = 'mongodb://localhost/happiness';
// }
const mongoose = require('mongoose');
<<<<<<< HEAD
<<<<<<< HEAD
=======
const link = require('../../../password.json');
console.log(link);
>>>>>>> parent of 59a167a... SYNTAX
console.log(process.env);
let mongoURI = '';
if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = 'mongodb://localhost/happiness';
}
<<<<<<< HEAD

=======
mongoURI = link.password;
>>>>>>> parent of 59a167a... SYNTAX
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
=======
// mongoose.connect('mongodb://localhost/happiness', {
//   useNewUrlParser: true,
//   // useUnifiedTopology: true,
// });
// console.log('Connected to Atlas');
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
>>>>>>> parent of 712028b... changed routes
