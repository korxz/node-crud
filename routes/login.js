const express = require('express');
const app = express();
const loginController = require('../controllers/login');

app.post('/login', loginController.login);

module.exports = app;