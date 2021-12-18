const { addNewCase, getAllCases, getSingleCase, updateCase, deleteCase } = require('../controllers/caseController');

const router = require('express').Router();

// Create New Case
router.post('/add', addNewCase);

// Get All Cases
router.get('/', getAllCases);

// Get case by Id
router.get('/:id', getSingleCase);


// Update Case
router.put('/:id', updateCase);

// Delete Case
router.delete('/:id', deleteCase);

module.exports = router;