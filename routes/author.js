const Author = require('../models/author');

exports.getAuthorForm = (req, res) => {
    res.render('author/add', { title: 'Author add', author: new Author() });
}

exports.setAuthor = async (req, res) => {
    try {
        const author = new Author({
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            email: req.body.email
        });

        const newAuthor = await author.save();
        res.redirect('/author/add');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.putAuthor = async (req, res) => {
    res.redirect('/author/add');
}

exports.deleteAuthor = async (req, res) => {
    res.redirect('author/add');
}