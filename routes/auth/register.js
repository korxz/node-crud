const express = require('express');
const app = express();
const registerController = require('../../controllers/auth/register');

app.post('/register', registerController.register);

module.exports = app;