const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username: String,
    password: String
})

module.exports = mongoose.model('User', UserSchema);
