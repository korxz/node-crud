const express = require('express');
const app = express();
const authorsController = require('../controllers/author');

app.get('/', authorsController.getAuthors);
app.post('/', authorsController.setAuthor);
app.get('/add', authorsController.getAuthorForm);
app.put('/edit/:authorId', authorsController.putAuthor);
app.delete('/delete/:authorId', authorsController.deleteAuthor);

module.exports = app;