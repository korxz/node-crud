module.exports = (req, res, next) => {
    return (req, res, next) => {
        console.log('Request made to endpoint: ' + req.path)
        next()
    }
}