let mongoURI = '';
if (process.env.NODE_ENV === 'production') {
  let mongoURI = process.env.DB_URL;
} else {
  let mongoURI = 'mongodb://localhost/happiness';
}
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/happiness', {
  useNewUrlParser: true,
});

module.exports = mongoose;
