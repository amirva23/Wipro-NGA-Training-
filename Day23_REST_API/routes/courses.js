const express = require('express');
const { body, validationResult } = require('express-validator');
let courses = require('../data/coursesData');
const router = express.Router();

// GET all courses
router.get('/', (req, res) => {
  res.json(courses);
});

// GET a single course
router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).json({ error: "Course not found" });
  res.json(course);
});

// POST a new course with validation
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Course name is required'),
    body('duration').notEmpty().withMessage('Course duration is required')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const newCourse = {
      id: courses.length + 1,
      name: req.body.name,
      duration: req.body.duration
    };
    courses.push(newCourse);
    res.status(201).json(newCourse);
  }
);

// PUT update a course with validation
router.put(
  '/:id',
  [
    body('name').notEmpty().withMessage('Course name is required'),
    body('duration').notEmpty().withMessage('Course duration is required')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).json({ error: "Course not found" });

    course.name = req.body.name;
    course.duration = req.body.duration;
    res.json(course);
  }
);

// DELETE a course
router.delete('/:id', (req, res) => {
  const index = courses.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Course not found" });

  const deletedCourse = courses.splice(index, 1);
  res.json(deletedCourse[0]);
});

module.exports = router;
