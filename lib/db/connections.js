const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/happiness', {
  useNewUrlParser: true,
});

module.exports = mongoose;
