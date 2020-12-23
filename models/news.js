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

newsSchema.statics.getNumberOfComments = async () => {
    return this.comments.find({}).count({});
}

module.exports = mongoose.model('News', newsSchema);