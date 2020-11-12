if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
var methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const commentsRouter = require('./routes/comment');
const newsRouter = require('./routes/news');
const authorRouter = require('./routes/author');
const topicsRouter = require('./routes/topic');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

app.use(expressLayouts);
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());
app.use(methodOverride('_method'))

 mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useFindAndModify: false
})

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.on('open', () => console.log('Connected to Mongoose'))

// Homepage routes
app.get('/', indexRouter.index);

// Author
app.get('/author/add', authorRouter.getAuthorForm);
app.post('/author/add', authorRouter.setAuthor);
app.put('/author/edit/:authorId', authorRouter.putAuthor);
app.delete('/author/delete/:authorId', authorRouter.deleteAuthor);

// News routes
app.get('/news', newsRouter.getNews);
app.get('/news/add', newsRouter.getNewsForm);
app.post('/news', newsRouter.setNews);
app.get('/news/:newsId/edit', newsRouter.getNewsEditForm);
app.put('/news/:newsId', newsRouter.updateNews);

// Comments routes
app.get('/comments', commentsRouter.getComments);
app.get('/comments/add', commentsRouter.getCommentForm);
app.post('/comments/add', commentsRouter.setComment);
app.delete('/comments/delete/:commentId', commentsRouter.deleteComment);
app.put('/comments/:commentId', commentsRouter.updateComment);

// Topic
app.get('/topics', topicsRouter.getTopics);
app.post('topics', topicsRouter.setTopic);

app.listen(process.env.PORT || 3000)