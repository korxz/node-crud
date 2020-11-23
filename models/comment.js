const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    news: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'News'
    }
});

module.exports = mongoose.model('Comment', commentSchema);