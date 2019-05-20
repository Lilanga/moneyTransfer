const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userModel = new schema({
    userName: { type: String }
});

module.exports = mongoose.model('users', userModel);