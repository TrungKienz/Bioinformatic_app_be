const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataTestModel = new Schema({
    IDTest: String,
    Gene: String,
    RS_ID: String,
    Nucleotide: String,
    Protein: String,
    VariationType: String,
    VariantLength: String,
    Position: String,
    DrugResponse: String,
    VariantRate: String,
    ReadDepth: String,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('data_tests', dataTestModel);
