// let mongoURI = '';
if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = 'mongodb://localhost/happiness';
}
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/happiness', {
  useNewUrlParser: true,
});

module.exports = mongoose;
