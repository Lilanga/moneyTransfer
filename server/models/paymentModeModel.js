const mongoose = require('mongoose');
const schema = mongoose.Schema;

const paymetModeModel = new schema({
    name: { type: String }
});

module.exports = mongoose.model('paymetModes', paymetModeModel);