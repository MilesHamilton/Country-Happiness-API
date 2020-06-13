const happinessData19 = require('./2019Hdata.json');
const Happiness = require('../models/Happiness');
// const HappinessPage = require('../models/HappinessPage');

Happiness.deleteMany({});
Happiness.create(happinessData19)
  .then((happiness) => {
    console.log(happiness);
    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });

// HappinessPage.deleteMany({});
// HappinessPage.create(happinessData19)
//   .then((happinessPage) => {
//     console.log(happinessPage);
//     process.exit();
//   })
//   .catch((err) => {
//     console.log(err);
//   });
