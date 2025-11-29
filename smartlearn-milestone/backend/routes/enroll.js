const express = require('express');
const { body, validationResult } = require('express-validator');
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');

const router = express.Router();

router.post('/',
  [
    body('userId').notEmpty().withMessage('userId required'),
    body('courseId').notEmpty().withMessage('courseId required')
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ success:false, data:null, message: errors.array() });

    const { userId, courseId } = req.body;
    try {
      // Validate course exists
      const course = await Course.findOne({ courseId });
      if (!course) return res.status(400).json({ success:false, data:null, message: 'Course does not exist' });

      // Prevent duplicate enrollment
      const existing = await Enrollment.findOne({ userId, courseId });
      if (existing) return res.status(400).json({ success:false, data:null, message: 'Duplicate enrollment' });

      const enrollment = new Enrollment({ userId, courseId });
      await enrollment.save();
      return res.status(201).json({ success:true, data: enrollment, message: 'Enrolled successfully' });
    } catch (err) {
      if (err.code === 11000) return res.status(400).json({ success:false, data:null, message: 'Duplicate enrollment' });
      next(err);
    }
  }
);

module.exports = router;
