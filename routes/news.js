const express = require('express');
const app = express();
const newsController = require('../controllers/news');

app.get('/', newsController.getNews);
app.post('/', newsController.setNews);
app.get('/add', newsController.getNewsForm);
app.get('/:newsId/edit', newsController.getNewsEditForm);
app.put('/:newsId', newsController.updateNews);

module.exports = app;