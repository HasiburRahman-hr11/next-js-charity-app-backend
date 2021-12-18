const Donation = require('../models/Donation');

exports.addNewDonation = async (req, res) => {
    try {
        const newDonation = new Donation(req.body);
        await newDonation.save();
        res.status(201).json(newDonation);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Get All Donations
exports.getAllDonations = async (req, res) => {
    try {
        const donations = await Donation.find();
        res.status(200).json(donations);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Single Donation
exports.getSingleDonation = async (req, res) => {
    const { id } = req.params;
    try {
        const donation = await Donation.findById(id);
        if (donation) {
            res.status(200).json(donation);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Update Donation
exports.updateDonation = async (req, res) => {
    const { id } = req.params;
    try {
        const donation = await Donation.findById(id);
        if (donation) {
            const updatedDonation = await Donation.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json(updatedDonation);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Delete Donation
exports.deleteDonation = async (req, res) => {
    const { id } = req.params;
    try {
        const donation = await Donation.findById(id);
        if (donation) {
            await Donation.findByIdAndDelete(id)
        }
        res.status(200).json(donation);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}