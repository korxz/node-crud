const News = require('../models/news');
const Topic = require('../models/topic');
const Author = require('../models/author');

exports.getNews = async (req, res) => {
    try {
        const news = await News.find({})
            .populate('author')
            .populate('topics');

        res.status(200).render('news/view', {
            title: 'All news',
            news: news
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getNewsForm = (req, res) => {
    res.render('news/add', { title: 'Add news', news: new News() });
};

exports.setNews = async (req, res) => {
    try {

        const news = new News({
            title: req.body.title,
            text: req.body.text,
        });

        await Topic.findOne({ name: req.body.topics }, async (err, topic) => {
            if (err) {
                res.redirect('/news/add')
            }
            
            if (topic == null) {
                const newTopic = new Topic({
                    name: req.body.topics
                })

                news.topics = await newTopic.save();
            } else {
                news.topics = topic;
            }
        });

        await Author.findOne({ username: req.body.author }, (err, author) => {
            if (err || author == null) {
                res.redirect('/news/add')
            }

            news.author = author;
        })

        const newNews = await news.save();
        
        res.redirect('/news');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getNewsEditForm = async (req, res) => {
    try {
        const news = await News.findById(req.params.newsId)
            .populate('author')
            .populate('topics');
            
        res.render('news/edit', {
            title: 'Edit news',
            news: news
        });

    } catch (e) {
        res.redirect('/news');
    }
};

exports.updateNews = async (req, res) => {
    try {
        const news = await News.findById(req.body.newsId);
        news.title = req.body.title;
        news.text = req.body.text;
        
        await Topics.findOne({
            name: req.body.topics
        }, async (err, topic) => {
            if (err) {
                res.redirect('/news/' + req.body.newsId + '/edit');
            }

            if (topic == null) {
                const newTopic = new Topic({
                    name: req.body.topics
                });

                news.topics = await newTopic.save();
            } else {
                news.topics = topic;
            }
        });

        await news.save();
        res.redirect('/news');
    } catch (e) {
        res.redirect('/news/' + req.body.newsId + '/edit');
    }
};