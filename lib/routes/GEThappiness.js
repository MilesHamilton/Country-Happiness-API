const express = require('express');
const app = new express();
const happinessController = require('../controllers/GEThappiness');

app.get('/', happinessController.index);
app.get('/rank/:rank', happinessController.rank);
app.get('/country/:country', happinessController.country);
app.get('/score/:score', happinessController.score);
app.get('/gdp/:gdp', happinessController.gdp);
app.get('/social/:social', happinessController.social);
app.get('/health/:health', happinessController.health);
app.get('/freedom/:freedom', happinessController.freedom);
app.get('/freedom/:freedom', happinessController.generosity);
app.get('/perception/:perception', happinessController.perception);
