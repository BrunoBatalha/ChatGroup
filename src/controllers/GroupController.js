const Group = require('../models/Group');

module.exports.add = async ({ name, author }) => {
    try {
        return await Group.create({ name, author });
    } catch (error) {
        return error
    }
}

module.exports.list = async () => {
    try {
        return await Group.find();
    } catch (error) {
        return error
    }
}

module.exports.searchName = async ({ name }) => {
    try {
        return await Group.findOne({ name: name });
    } catch (error) {
        return error;
    }
}