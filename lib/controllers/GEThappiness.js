const Happiness = require('../models/Happiness');

module.exports = {
  //--------read------------
  index: (req, res) => {
    Happiness.find({}).then((happiness) => {
      res.json(happiness);
    });
  },
  rank: (req, res) => {
    Happiness.find({ rank: req.params.rank }).then((happiness) => {
      res.json(happiness);
    });
  },

  country: (req, res) => {
    Happiness.find({ country: req.params.country }).then((happiness) => {
      res.json(happiness);
    });
  },
  score: (req, res) => {
    Happiness.find({ score: req.params.score }).then((happiness) => {
      res.json(happiness);
    });
  },
  gdp: (req, res) => {
    Happiness.find({ gdp: req.params.gdp }).then((happiness) => {
      res.json(happiness);
    });
  },
  social: (req, res) => {
    Happiness.find({ social: req.params.social }).then((happiness) => {
      res.json(happiness);
    });
  },
  health: (req, res) => {
    Happiness.find({ health: req.params.health }).then((happiness) => {
      res.json(happiness);
    });
  },
  freedom: (req, res) => {
    Happiness.find({ freedom: req.params.freedom }).then((happiness) => {
      res.json(happiness);
    });
  },
  generosity: (req, res) => {
    Happiness.find({ generosity: req.params.generosity }).then((happiness) => {
      res.json(happiness);
    });
  },
  perception: (req, res) => {
    Happiness.find({ perception: req.params.perception }).then((happiness) => {
      res.json(happiness);
    });
  },
};
