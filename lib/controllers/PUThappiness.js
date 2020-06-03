//--------update------------
const Happiness = require('../models/Happiness');

module.exports = {
  //--------update------------
  rank: (req, res) => {
    Happiness.findOneAndUpdate({ rank: req.params.rank }).then((happiness) => {
      res.json(happiness);
    });
  },

  country: (req, res) => {
    Happiness.findOneAndUpdate({ country: req.params.country }).then(
      (happiness) => {
        res.json(happiness);
      }
    );
  },
  score: (req, res) => {
    Happiness.findOneAndUpdate({ score: req.params.score }).then(
      (happiness) => {
        res.json(happiness);
      }
    );
  },
  gdp: (req, res) => {
    Happiness.findOneAndUpdate({ gdp: req.params.gdp }).then((happiness) => {
      res.json(happiness);
    });
  },
  social: (req, res) => {
    Happiness.findOneAndUpdate({ social: req.params.social }).then(
      (happiness) => {
        res.json(happiness);
      }
    );
  },
  health: (req, res) => {
    Happiness.findOneAndUpdate({ health: req.params.health }).then(
      (happiness) => {
        res.json(happiness);
      }
    );
  },
  freedom: (req, res) => {
    Happiness.findOneAndUpdate({ freedom: req.params.freedom }).then(
      (happiness) => {
        res.json(happiness);
      }
    );
  },
  generosity: (req, res) => {
    Happiness.findOneAndUpdate({ generosity: req.params.generosity }).then(
      (happiness) => {
        res.json(happiness);
      }
    );
  },
  perception: (req, res) => {
    Happiness.findOneAndUpdate({ perception: req.params.perception }).then(
      (happiness) => {
        res.json(happiness);
      }
    );
  },
};
