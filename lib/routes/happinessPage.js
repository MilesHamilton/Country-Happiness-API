const express = require('express');
const router = new express();
const happinessPageController = require('../controllers/happinessPage');
const parser = require('body-parser');
router.use(parser.json());

router.get('/'), happinessPageController.index;

module.exports = router;
