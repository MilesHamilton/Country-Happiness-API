const express = require('express');
const router = new express();
const happinessController = require('../controllers/happiness');
const parser = require('body-parser');
const Happiness = require('../models/Happiness');
router.use(parser.json());

//-----------------read---------------------

router.get('/page/:skip/:limit', (req, res) => {
  let limit = parseInt(req.params.limit);
  let skip = (parseInt(req.params.skip) - 1) * limit;
  Happiness.find({}, null, { limit: limit, skip: skip })
    .sort({ 'Overall rank': 1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
});

router.get('/', happinessController.index);
router.get('/rank/:rank', happinessController.rank);
router.get('/country/:country', happinessController.country);
router.get('/score/:score', happinessController.score);
router.get('/gdp/:gdp', happinessController.gdp);
router.get('/social/:social', happinessController.social);
router.get('/health/:health', happinessController.health);
router.get('/freedom/:freedom', happinessController.freedom);
router.get('/generosity/:generosity', happinessController.generosity);
router.get('/perception/:perception', happinessController.perception);

// ----------------update----------------
router.put('/country/:country', happinessController.editCountry);
router.put('/score/:score', happinessController.editScore);
router.put('/gdp/:gdp', happinessController.editGdp);
router.put('/social/:social', happinessController.editSocial);
router.put('/health/:health', happinessController.editHealth);
router.put('/freedom/:freedom', happinessController.editFreedom);
router.put('/generosity/:generosity', happinessController.editGenerosity);
router.put('/perception/:perception', happinessController.editPerception);

//--------------------create--------------------
router.post('/', happinessController.create);
//---------------------delete-------------------
router.delete('/:id', happinessController.delete);

module.exports = router;
