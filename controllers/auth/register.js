const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'tokensecret';

exports.register = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        // Generate new token
        const accessToken = jwt.sign({
            username: req.body.username,
            password: req.body.password
        }, accessTokenSecret);

        await user.save({token: accessToken});

        res.status(201).json({
            'token': accessToken
        });
    } catch (error) {
        res.status(500).json(error);
    }
};