module.exports = (app) => {
    const articles = require('../controllers/article.controller.js');

    // Create a new Note
    app.post('/articles', articles.create);

    // Retrieve all articles
    app.get('/articles', articles.findAll);

    // Update a Note with noteId
    app.put('/articles/:noteId', articles.update);

    // Delete a Note with noteId
    app.delete('/articles/:noteId', articles.delete);
}