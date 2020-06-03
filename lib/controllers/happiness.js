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

  //--------update------------
  editRank: (req, res) => {
    Happiness.findOneAndUpdate({ rank: req.params.rank }, req.body, {
      new: true,
    }).then((happiness) => {
      res.json(happiness);
    });
  },

  editCountry: (req, res) => {
    Happiness.findOneAndUpdate({ country: req.params.country }, req.body, {
      new: true,
    }).then((happiness) => {
      res.json(happiness);
    });
  },
  editScore: (req, res) => {
    Happiness.findOneAndUpdate({ score: req.params.score }, req.body, {
      new: true,
    }).then((happiness) => {
      res.json(happiness);
    });
  },
  editGdp: (req, res) => {
    Happiness.findOneAndUpdate({ gdp: req.params.gdp }, req.body, {
      new: true,
    }).then((happiness) => {
      res.json(happiness);
    });
  },
  editSocial: (req, res) => {
    Happiness.findOneAndUpdate({ social: req.params.social }, req.body, {
      new: true,
    }).then((happiness) => {
      res.json(happiness);
    });
  },
  editHealth: (req, res) => {
    Happiness.findOneAndUpdate({ health: req.params.health }, req.body, {
      new: true,
    }).then((happiness) => {
      res.json(happiness);
    });
  },
  editFreedom: (req, res) => {
    Happiness.findOneAndUpdate({ freedom: req.params.freedom }, req.body, {
      new: true,
    }).then((happiness) => {
      res.json(happiness);
    });
  },
  editGenerosity: (req, res) => {
    Happiness.findOneAndUpdate(
      { generosity: req.params.generosity },
      req.body,
      { new: true }
    ).then((happiness) => {
      res.json(happiness);
    });
  },
  editPerception: (req, res) => {
    Happiness.findOneAndUpdate(
      { perception: req.params.perception },
      req.body,
      { new: true }
    ).then((happiness) => {
      res.json(happiness);
    });
  },

  //--------create------------
  create: (req, res) => {
    Happiness.create(req.body).then((happiness) => {
      res.json(happiness);
    });
  },

  //--------delete------------
  delete: (req, res) => {
    Happiness.findByIdAndDelete(req.params.id, req.body, (err) => {
      if (!err) {
        console.log('deleted');
      }
    }).then((happiness) => {
      res.json(happiness);
    });
  },
};
