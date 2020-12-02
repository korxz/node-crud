const express = require('express');
const app = express();
const commentController = require('../controllers/comment');

app.get('/', commentController.getComments);
app.post('/', commentController.setComment);
app.get('/add', commentController.getCommentForm);
app.delete('/delete/:commentId', commentController.deleteComment);
app.put('/edit/:commentId', commentController.updateComment);

module.exports = app;