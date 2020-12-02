if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//const { request } = require('express');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const authorRouter = require('./routes/author');
const newsRouter = require('./routes/news');
const commentRouter = require('./routes/comment');
const topicRouter = require('./routes/topic');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(methodOverride('_method'));

// Middleware
const myLogger = require('./middleware/jwt');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useFindAndModify: false
});

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', error => console.error(error));
// eslint-disable-next-line no-console
db.on('open', () => console.log('Connected to Mongoose'));

// Homepage routes
app.use('/api', indexRouter);

// Auth routes
app.use('/api/auth', loginRouter);

// Author routes
app.use('/api/authors', authorRouter);

// News routes
app.use('/api/news', newsRouter);

// Comments routes
app.use('/api/comments', commentRouter);

// Topicroutes
app.use('/api/topics', topicRouter);

module.exports = app;

app.listen(process.env.PORT || 3000);