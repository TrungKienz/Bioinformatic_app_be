const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountModel = new Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },
    access: String,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('account_information', accountModel);
