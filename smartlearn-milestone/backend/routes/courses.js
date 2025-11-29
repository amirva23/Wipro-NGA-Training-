const express = require('express');
const { body, validationResult } = require('express-validator');
const Course = require('../models/Course');

const router = express.Router();

// POST /api/courses
router.post('/',
  [
    body('courseId').notEmpty().withMessage('courseId required'),
    body('title').notEmpty().withMessage('title required'),
    body('category').notEmpty().withMessage('category required'),
    body('price').isFloat({ min: 0 }).withMessage('price must be >= 0')
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ success:false, data:null, message: errors.array() });

    try {
      const course = new Course(req.body);
      await course.save();
      res.status(201).json({ success:true, data: course, message: 'Course created' });
    } catch (err) {
      if (err.code === 11000) return res.status(400).json({ success:false, data:null, message: 'courseId must be unique' });
      next(err);
    }
  }
);

// GET /api/courses
router.get('/', async (req, res, next) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json({ success:true, data: courses, message: '' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
