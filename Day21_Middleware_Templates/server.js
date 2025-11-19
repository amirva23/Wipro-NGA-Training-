const express = require('express');
const morgan = require('morgan');

const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Logging Middleware
app.use(logger);

// Morgan Logging Middleware
app.use(morgan('dev'));

// Routes
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to SkillTrack Academy API");
});

// 404 Middleware
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Global Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
