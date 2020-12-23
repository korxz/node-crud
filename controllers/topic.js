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
    await Topic.find()
        .where('name').equals(req.body.name)
        .exec((err, topic) => {
            if (err) res.status(500).json(err);
            res.status(200).json(topic);
        });
};

exports.setTopic = async (req, res) => {
    await Topic.create({
        name: req.body.name
    }, (err, topic) => {
        if (err) res.status(500).json(err);
        res.status(201).json(topic);
    });
};