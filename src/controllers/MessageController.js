const Message = require('../models/Message');

module.exports.add = async ({ author, content, idGroup }) => {
    try {
        return await Message.create({
            timestamp: new Date().getTime(),
            author,
            content,
            idGroup
        });
    } catch (error) {
        return error;
    }
}

module.exports.load = async ({ idGroup }) => {
    try {
        return await Message.find({
            idGroup: idGroup
        });
    } catch (error) {
        return error;
    }
}