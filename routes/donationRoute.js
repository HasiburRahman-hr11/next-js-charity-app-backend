const { addNewDonation, getAllDonations, deleteDonation } = require('../controllers/donationController');

const router = require('express').Router();

// Create New Case
router.post('/add', addNewDonation);

// Get All Cases
router.get('/', getAllDonations);

// Get case by Id
router.delete('/:id', deleteDonation);

module.exports = router;