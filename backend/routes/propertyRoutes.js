const express = require('express');
const router = express.Router();

// Sample data: replace with a database in a real application
let properties = [];

// GET all properties
router.get('/', (req, res) => {
    res.json(properties);
});

// POST a new property
router.post('/', (req, res) => {
    const newProperty = {
        id: properties.length + 1, // Simple incrementing id, replace with a better approach in production
        ...req.body,
    };
    properties.push(newProperty);
    res.status(201).json(newProperty);
});

// Export the router
module.exports = router;
