const happinessData19 = require('./2019Hdata.json');
const Happiness = require('../models/Happiness');

Happiness.deleteMany({});
Happiness.create(happinessData19)
  .then((happiness) => {
    console.log(happiness);
    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });
