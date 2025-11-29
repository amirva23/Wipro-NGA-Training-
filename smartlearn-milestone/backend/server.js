require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const coursesRouter = require('./routes/courses');
const enrollRouter = require('./routes/enroll');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/courses', coursesRouter);
app.use('/api/enroll', enrollRouter);

// Invalid route handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    data: null,
    message: 'Route not found'
  });
});

// Error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB (updated for Mongoose v7+)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');

    // Start server ONLY if not in test mode
    if (process.env.NODE_ENV !== 'test') {
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    }
  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });

module.exports = app; // important for tests
