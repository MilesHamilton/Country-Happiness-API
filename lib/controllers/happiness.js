const Happiness = require('../models/Happiness');

module.exports = {
  //--------read------------
  index: (req, res) => {
    Happiness.find({}).then((happiness) => {
      res.json(happiness);
    });
  },
  rank: (req, res) => {
    Happiness.find({ 'Overall rank': req.params.rank }).then((happiness) => {
      res.json(happiness);
    });
  },

  country: (req, res) => {
    Happiness.find({ 'Country or region': req.params.country }).then(
      (happiness) => {
        res.json(happiness);
      }
    );
  },
  score: (req, res) => {
    Happiness.find({ Score: req.params.score }).then((happiness) => {
      res.json(happiness);
    });
  },
  gdp: (req, res) => {
    Happiness.find({ 'GDP per capita': req.params.gdp }).then((happiness) => {
      res.json(happiness);
    });
  },
  social: (req, res) => {
    Happiness.find({ 'Social support': req.params.social }).then(
      (happiness) => {
        res.json(happiness);
      }
    );
  },
  health: (req, res) => {
    Happiness.find({ 'Healthy life expectancy': req.params.health }).then(
      (happiness) => {
        res.json(happiness);
      }
    );
  },
  freedom: (req, res) => {
    Happiness.find({ 'Freedom to make life choices': req.params.freedom }).then(
      (happiness) => {
        res.json(happiness);
      }
    );
  },
  generosity: (req, res) => {
    Happiness.find({ Generosity: req.params.generosity }).then((happiness) => {
      res.json(happiness);
    });
  },
  perception: (req, res) => {
    Happiness.find({ 'Perceptions of corruption': req.params.perception }).then(
      (happiness) => {
        res.json(happiness);
      }
    );
  },
  rank: (req, res) => {
    Happiness.find({ 'Overall rank': req.params.rank }).then((happiness) => {
      res.json(happiness);
    });
  },

  //--------update------------
  // editID: (req, res) => {
  //   Happiness.FindById({id: (e,data) =>{
  //     if(e) {
  //       return res.send(500, e)
  //     }
  //     if(!data) {
  //       return res.send(404)
  //     }

  //     const update = {
  //       "Country or region": req.body.country,
  //       Score: req.body.score,
  //       'GDP per capita': req.body.gdp,
  //       'Social support': req.body.social,
  //       'Healthy life expectancy': req.body.health,
  //       'Freedom to make life choices': req.body.freedom,
  //       'Perceptions of corruption': req.body.perception 
  //     },
  //     const id = req.body._id
  //     Happiness.findById(id,update,(err)=>{
  //       if (err){
  //         return res.send(404)
  //       }
  //     })
  //   }},
  //   {
  //     new: true,
  //   }).then((happiness) => {
  //     res.json(happiness);
  //   });
  // },

  // editCountry: (req, res) => {
  //   Happiness.findOneAndUpdate(
  //     { 'Country or region': req.params.country },
  //     req.body,
  //     {
  //       new: true,
  //     }
  //   ).then((happiness) => {
  //     res.json(happiness);
  //   });
  // },
  // editScore: (req, res) => {
  //   Happiness.findOneAndUpdate({ Score: req.params.score }, req.body, {
  //     new: true,
  //   }).then((happiness) => {
  //     res.json(happiness);
  //   });
  // },
  // editGdp: (req, res) => {
  //   Happiness.findOneAndUpdate({ 'GDP per capita': req.params.gdp }, req.body, {
  //     new: true,
  //   }).then((happiness) => {
  //     res.json(happiness);
  //   });
  // },
  // editSocial: (req, res) => {
  //   Happiness.findOneAndUpdate(
  //     { 'Social support': req.params.social },
  //     req.body,
  //     {
  //       new: true,
  //     }
  //   ).then((happiness) => {
  //     res.json(happiness);
  //   });
  // },
  // editHealth: (req, res) => {
  //   Happiness.findOneAndUpdate(
  //     { 'Healthy life expectancy': req.params.health },
  //     req.body,
  //     {
  //       new: true,
  //     }
  //   ).then((happiness) => {
  //     res.json(happiness);
  //   });
  // },
  // editFreedom: (req, res) => {
  //   Happiness.findOneAndUpdate(
  //     { 'Freedom to make life choices': req.params.freedom },
  //     req.body,
  //     {
  //       new: true,
  //     }
  //   ).then((happiness) => {
  //     res.json(happiness);
  //   });
  // },
  // editGenerosity: (req, res) => {
  //   Happiness.findOneAndUpdate(
  //     { Generosity: req.params.generosity },
  //     req.body,
  //     { new: true }
  //   ).then((happiness) => {
  //     res.json(happiness);
  //   });
  // },
  // editPerception: (req, res) => {
  //   Happiness.findOneAndUpdate(
  //     { 'Perceptions of corruption': req.params.perception },
  //     req.body,
  //     { new: true }
  //   ).then((happiness) => {
  //     res.json(happiness);
  //   });
  // },

  //--------create------------
  create: (req, res) => {
    Happiness.create(req.body).then((happiness) => {
      res.json(happiness);
    });
  },

  //--------delete------------
  delete: (req, res) => {
    Happiness.findOneAndDelete({"_id":req.params.id}, req.body, (err) => {
      if (!err) {
        console.log('deleted');
      }
    }).then((happiness) => {
      res.json(happiness);
    });
  },
};
