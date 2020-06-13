const mongoose = require('../db/connections');
const Schema = mongoose.Schema;

const HappinessPage = new Schema({
  'Overall rank': Number,
  'Country or region': String,
  Score: Number,
  'GDP per capita': Number,
  'Social support': Number,
  'Healthy life expectancy': Number,
  'Freedom to make life choices': Number,
  Generosity: Number,
  'Perceptions of corruption': Number,
});

module.exports = mongoose.model('HappinessPage', HappinessPage);
