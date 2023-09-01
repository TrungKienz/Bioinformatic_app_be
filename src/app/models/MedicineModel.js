const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicineModel = new Schema({
    geneName: String,
    mutation: String,
    medicine: String,
    valence: String,
    responseMedication: String,
    therapyRank: String,
    priority: String,
    VN: String,
    FDA: String,
    otherOrganization: String,
    clinicalTrials: String,
    note: String,
    references: String,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('medicine', medicineModel);
