const Happiness = require('../models/Happiness');

module.exports = {
  //--------create------------
  create: (req, res) => {
    Happiness.create(req.body).then((happiness) => {
      res.json(happiness);
    });
  },
};
