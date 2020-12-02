const express = require('express');
const app = express();
const indexController = require('../controllers/index');

app.get('/', indexController.index);

module.exports = app;