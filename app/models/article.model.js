const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    _id: ObjectId,
    userId : Number,
    title : String,
    text : String,
    tags : [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);
