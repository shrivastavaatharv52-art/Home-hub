'use strict';

const express = require('express');
const router = express.Router();

// Import user controller functions
const { registerUser, loginUser, logoutUser } = require('../controllers/userController');

// Authentication routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;
