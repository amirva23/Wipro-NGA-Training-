const express = require('express');
const validateStudent = require('../middleware/validateStudent');

const router = express.Router();

router.post('/', validateStudent, (req, res) => {
    res.status(201).json({
        success: true,
        message: "Student created successfully",
        data: req.body
    });
});

module.exports = router;
