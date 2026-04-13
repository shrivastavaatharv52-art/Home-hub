// userController.js

const User = require('../models/User'); // Ensure you have a User model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Signup function
exports.signup = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if user already exists
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        user = await new User({ username, password: hashedPassword }).save();

        return res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};

// Login function
exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create and assign a token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' }); // Use environment variable for secret

        return res.status(200).json({ message: 'Logged in successfully', token });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};