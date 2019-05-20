const mongoose = require('mongoose');
const schema = mongoose.Schema;

const transectionModel = new schema({
    user: { type: String },
    mode: { type: String },
    amount: { type: Number }
});

module.exports = mongoose.model('transections', transectionModel);