const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: ObjectId,
    name : String,
    url : String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
