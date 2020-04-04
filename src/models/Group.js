const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: String,
    author:String
})

module.exports = mongoose.model('Group', GroupSchema);
