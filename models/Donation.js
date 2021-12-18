const { Schema, model } = require('mongoose');

const donationSchema = new Schema({
    userInformation: {
        type: Object
    },
    paymentInformation: {
        type: Object
    }
}, { timestamps: true });


const Donation = model('Donation', donationSchema);
module.exports = Donation;