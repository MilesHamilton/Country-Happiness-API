const express = require('express');
const router = new express();
const happinessController = require('../controllers/happiness');
const parser = require("body-parser");
router.use(parser.json());

//-----------------read---------------------
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
// router.put('/:id', happinessController.editId);

//--------------------create--------------------
router.post('/', happinessController.create);
//---------------------delete-------------------
router.delete('/:id', happinessController.delete);

module.exports = router;
