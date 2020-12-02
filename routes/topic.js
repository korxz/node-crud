const express = require('express');
const app = express();
const topicController = require('../controllers/topic');

app.get('/', topicController.getTopics);
app.post('/', topicController.setTopic);

module.exports = app;