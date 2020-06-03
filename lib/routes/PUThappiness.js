const express = require('express');
const app = new express();
const happinessController = require('../controllers/POSThappiness');

app.put('/rank/:rank', happinessController.rank);
app.put('/country/:country', happinessController.country);
app.put('/score/:score', happinessController.score);
app.put('/gdp/:gdp', happinessController.gdp);
app.put('/social/:social', happinessController.social);
app.put('/health/:health', happinessController.health);
app.put('/freedom/:freedom', happinessController.freedom);
app.put('/freedom/:freedom', happinessController.generosity);
app.put('/perception/:perception', happinessController.perception);
