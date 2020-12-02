const jwt = require('jsonwebtoken');
const accessTokenSecret = 'tokensecret';

module.exports = (req, res, next) => {
    const { headers } = req;
    console.log(headers);


    if (headers.authorization != undefined) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.status(403);
            }

            req.user = user;
            return next();
        })
    } else {
        return res.status(403);
    }
};