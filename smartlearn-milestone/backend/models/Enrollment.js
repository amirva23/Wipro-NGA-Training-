const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  courseId: { type: String, required: true },
  enrolledOn: { type: Date, default: Date.now }
});

// Prevent duplicate on schema level (index)
EnrollmentSchema.index({ userId: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model('Enrollment', EnrollmentSchema);
