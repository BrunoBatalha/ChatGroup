const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    timestamp: String,
    content: String,
    author: String,
    idGroup: String
})

module.exports = mongoose.model('Message', MessageSchema);
