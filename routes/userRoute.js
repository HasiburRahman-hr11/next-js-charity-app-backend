const { createNewUser, getAllUsers, getUserByEmail, getUserById, updateUser, deleteUser } = require('../controllers/userController');

const router = require('express').Router();

// Create New User
router.post('/create' , createNewUser);

// Get All Users
router.get('/' , getAllUsers);

// Get user by Id
router.get('/user-id/:id' , getUserById);

// Get user by Email
router.get('/:email' , getUserByEmail);

// Update User
router.put('/:id' , updateUser);

// Delete User
router.delete('/:id' , deleteUser);

module.exports = router;