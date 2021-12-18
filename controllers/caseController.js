const Case = require('../models/Case');

// Add new case
exports.addNewCase = async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const caseData = {
        title,
        description
    }

    if (req.files.thumbnail) {
        const thumbnailData = req.files.thumbnail.data;
        const encodedThumbnail = thumbnailData.toString('base64');
        const thumbnail = Buffer.from(encodedThumbnail, 'base64');

        caseData.thumbnail = thumbnail
    }

    try {
        const newCase = new Case(caseData);
        await newCase.save();
        res.status(201).json(newCase);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Get All Cases
exports.getAllCases = async (req, res) => {
    try {
        const allCases = await Case.find().sort({ createdAt: -1 });
        res.status(200).json(allCases);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Get Single Case
exports.getSingleCase = async (req, res) => {
    const { id } = req.params;
    try {
        const isCase = await Case.findById(id);
        if (isCase) {
            res.status(200).json(isCase);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Update case
exports.updateCase = async (req, res) => {
    const { id } = req.params;
    const title = req.body.title;
    const description = req.body.description;
    const caseData = {
        title,
        description
    }

    if (req?.files?.thumbnail) {
        const thumbnailData = req.files.thumbnail.data;
        const encodedThumbnail = thumbnailData.toString('base64');
        const thumbnail = Buffer.from(encodedThumbnail, 'base64');

        caseData.thumbnail = thumbnail
    }
    try {
        const isCase = await Case.findById(id);
        if (isCase) {
            const updatedCase = await Case.findByIdAndUpdate(id, caseData, { new: true });
            res.status(200).json(updatedCase);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Update case
exports.deleteCase = async (req, res) => {
    const { id } = req.params;
    try {
        const isCase = await Case.findById(id);
        if (isCase) {
            await Case.findByIdAndDelete(id);
            res.status(200).json(isCase);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}