const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    topics: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Topic'
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    timestamps: {}
});

module.exports = mongoose.model('News', newsSchema);