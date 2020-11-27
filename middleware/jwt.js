module.exports = (req, res, next) => {
    return (req, res, next) => {
        // eslint-disable-next-line no-console
        console.log('Request made to endpoint: ' + req.path);
        next();
    };
};