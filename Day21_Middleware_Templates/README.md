# Day 21 — Express.js Middleware Project

This project implements custom, built-in, and error-handling middleware as per the user stories provided by SkillTrack Academy.

## Features Implemented

### 1. Custom Logging Middleware
Logs timestamp, HTTP method, and URL for every request.

### 2. Validation Middleware
Checks student data (`name`, `email`) before processing POST routes.

### 3. Built-in Middleware
- express.json()
- express.urlencoded()

### 4. Morgan Logging Middleware
Used in development mode for formatted logs.

### 5. Global Error Handler
Catches unexpected errors and returns a clean JSON message.

### 6. 404 Handler
Handles undefined routes.

##  Installation & Setup

 1.  Install dependencies
npm install

 2. Start the server
node server.js

 3. Open in browser
http://localhost:3000

### API Endpoints

# 1.Get all students
GET http://localhost:3000/students

# 2.  Add a student
POST http://localhost:3000/students
Body (JSON):
{
  "name": "Amir",
  "email": "amir@example.com"
}

## Requirements
- Node.js installed
- Postman for testing API




