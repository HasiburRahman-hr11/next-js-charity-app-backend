const { addNewDonation, getAllDonations, deleteDonation, getSingleDonation, updateDonation } = require('../controllers/donationController');

const router = require('express').Router();

// Create New Case
router.post('/add', addNewDonation);

// Get All Cases
router.get('/', getAllDonations);

// Get donation by Id
router.get('/:id', getSingleDonation);

// Update donation 
router.put('/:id', updateDonation)

// Delete donation
router.delete('/:id', deleteDonation)

module.exports = router;