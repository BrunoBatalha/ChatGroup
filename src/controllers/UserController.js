const User = require('../models/User');

module.exports.add = async (user) => {
    const { username, password } = user;
    try {
        return await User.create({ username, password });
    } catch (error) {
        return error
    }
}

module.exports.login = async (user) => {
    try {
        return await User.findOne({
            username: user.username,
            password: user.password
        });        
    } catch (error) {
        return error;
    }
}
