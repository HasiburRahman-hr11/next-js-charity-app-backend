const { Schema, model } = require('mongoose');

const caseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    thumbnail: {
        type: Buffer
    }
}, { timestamps: true });


const Case = model('Case', caseSchema);
module.exports = Case;