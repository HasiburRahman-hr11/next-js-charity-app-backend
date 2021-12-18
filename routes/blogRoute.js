const { addNewBlog, getAllBlogs, getSingleBlog, updateBlog, deleteBlog } = require('../controllers/blogController');

const router = require('express').Router();

// Create New Case
router.post('/add', addNewBlog);

// Get All Cases
router.get('/', getAllBlogs);

// Get case by Id
router.get('/:id', getSingleBlog);


// Update Case
router.put('/:id', updateBlog);

// Delete Case
router.delete('/:id', deleteBlog);

module.exports = router;