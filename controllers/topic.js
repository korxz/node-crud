const Topic = require('../models/topic');

exports.getTopics = async (req, res) => {
    try {
        const topics = await Topic.find({});

        res.status(200)
            .json({
                topics
            });
    } catch (error) {
        res.status(404)
            .send(error.message);
    }
};

exports.getTopicByName = async (req, res) => {
    try {

    } catch (error) {
        res.status(404)
            .send(error.message);
    }
};

exports.setTopic = async (req, res) => {
    try {
        const topic = new Topic({
            name: req.body.name
        });

        topic.save((err, newTopic) => {
            if (err) {
                res.status(404)
                    .send(err.message);
            } else {
                res.status(200)
                    .json(newTopic);
            }
        });
    } catch (error) {
        res.status(404)
            .send(error.message);
    }
};