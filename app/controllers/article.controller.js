const Article = require('../models/article.model.js');

// Create and Save a new Article
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Article content can not be empty"
        });
    }

    // Create a Article
    const article = new Article({
        title: req.body.title,
        text: req.body.text,
        tags: req.body.tags,
        userId: req.body.user.id
    });

    // Save Article in the database
    article .save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Article."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Article.find()
        .then(articles => {
            res.send(articles);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};



// Update a article identified by the userId in the request
exports.update = (req, res) => {
    / Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Article content can not be empty"
        });
    }

    // Find article and update it with the request body
    Article.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title,
        text: req.body.text,
        tags: req.body.tags,
        userId: req.body.user.id
    }, {new: true})
        .then(article => {
            if(!article) {
                return res.status(404).send({
                    message: "Article not found with id " + req.params.noteId
                });
            }
            res.send(article);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Article not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Error updating article with id " + req.params.noteId
        });
    });
};

// Delete a article with the specified userId in the request
exports.delete = (req, res) => {
    Article.findByIdAndRemove(req.params.noteId)
        .then(Uuer => {
            if(!Uuer) {
                return res.status(404).send({
                    message: "Article not found with id " + req.params.noteId
                });
            }
            res.send({message: "Article deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Article not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Could not delete Uuer with id " + req.params.noteId
        });
    });
};
