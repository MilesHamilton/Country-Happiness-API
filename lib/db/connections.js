// let mongoURI = '';
if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = 'mongodb://localhost/happiness';
}
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhostL:27017/happiness', {
  useNewUrlParser: true,
});

module.exports = mongoose;
