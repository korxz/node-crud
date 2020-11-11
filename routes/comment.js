const Comment = require('../models/comment');


exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.find({})

        res.status(200).render('comment/view', {title: 'All comments', comments: comments});
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getCommentForm = (req, res) => {
    res.render('comment/add', { title: 'Add comment', comment: new Comment() })
}

exports.setComment = (req, res) => {
    const comment = new Comment({
        author: req.body.author,
        text: req.body.text
    });

    comment.save((err, newComment) => {
        if (err) {
            res.render('add', {
                author: comment.author,
                text: comment.text,
                errorMessage: 'Error creating a comment'
            });
        } else {
            res.redirect('/comments')
        }
    })
}

exports.deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndRemove(req.params.commentId);

        res.status(200).send({
            message: 'Comment successfully deleted',
            id: comment._id
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.commentId, {text: req.body.text});

        res.status(200).send({
            'message': 'Comment successfuly updated',
            id: comment._id
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}