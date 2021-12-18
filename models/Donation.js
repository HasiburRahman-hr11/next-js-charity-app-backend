const { Schema, model } = require('mongoose');

const donationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: { type: String },
    author: { type: String },
    thumbnail: { type: Buffer }
}, { timestamps: true });


const Donation = model('Donation', donationSchema);
module.exports = Donation;