const Comment = require('../models/comment');
const News = require('../models/news');

exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.find({})
            .populate('news');

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getCommentForm = (req, res) => {
    res.render('comment/add', { title: 'Add comment', comment: new Comment() });
};

exports.setComment = async (req, res) => {
    const news = await News.findById(req.body.news);

    const comment = new Comment({
        author: req.body.author,
        text: req.body.text,
        news: news
    });

    comment.save((err, newComment) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json({
                newComment
            });
        }
    });
};

exports.deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndRemove(req.params.commentId);

        res.status(200).json({
            message: 'Comment successfully deleted',
            id: comment._id
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.commentId, {text: req.body.text});

        res.status(200).json({
            'message': 'Comment successfuly updated',
            id: comment._id
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};