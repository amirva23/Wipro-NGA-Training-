const express = require('express');
const app = express();
const PORT = 3000;

const coursesRouter = require('./routes/courses');
const errorHandler = require('./middleware/errorHandler');
const rateLimiter = require('./middleware/rateLimiter');

// Middleware
app.use(express.json());
app.use('/api/v1/courses', rateLimiter); // Rate limiting
app.use('/api/v1/courses', coursesRouter);

// Centralized error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

app.get('/', (req, res) => {
  res.send('My API is running successfully day 23. Go to /api/v1/courses to see courses.');
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});
