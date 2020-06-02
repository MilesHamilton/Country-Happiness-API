const mongoose = require('../db/connections');
const Schema = mongoose.Schema;

const Happiness = new Schema({
  'overall rank': Number,
  'Country or region': String,
  Score: Number,
  'GDP per capita': Number,
  'social support': Number,
  'healthy life expectancy': Number,
  'freedom to make life choices': Number,
  generosity: Number,
  'percepetion of corruption': Number,
});

module.exports = mongoose.model('Happiness', Happiness);
