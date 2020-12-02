const accessTokenSecret = 'tokensecret';
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const {username, password} = req.body;

    if (username != undefined && password != undefined) {
        const accessToken = jwt.sign({
            username: username,
            password: password
        }, accessTokenSecret);

        res.status(200).json({
            token: accessToken
        });
    }

    res.status(403).json({
        message: 'Forbidden'
    });
};