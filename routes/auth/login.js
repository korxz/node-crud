const express = require('express');
const app = express();
const loginController = require('../../controllers/auth/login');

app.post('/login', loginController.login);

module.exports = app;