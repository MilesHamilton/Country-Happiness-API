const mongoose = require('mongoose');
console.log(process.env);
let mongoURI = '';
if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = 'mongodb://localhost/happiness';
}

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
