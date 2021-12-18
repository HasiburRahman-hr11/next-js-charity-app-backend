const User = require('../models/User');

// Create New User
exports.createNewUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(200).json(existingUser);
        }

        const newUser = new User({
            name,
            email
        });
        await newUser.save();
        res.status(201).json(newUser);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Get All Users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


// Get User by Email
exports.getUserByEmail = async (req, res) => {
    const { email } = req.params
    try {
        const user = await User.findOne({ email: email });
        return res.status(200).json(user)
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}



// Get User by Id
exports.getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id);
        return res.status(200).json(user)

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}




// Update an User
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    try {

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedUser);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


// Delete User 
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }
        await User.findByIdAndDelete(id)
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}