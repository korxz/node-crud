exports.index = (req, res) => {
    res.status(200).render('index', {
        title: 'Index',
        body: 'Hello world'
    });
};
