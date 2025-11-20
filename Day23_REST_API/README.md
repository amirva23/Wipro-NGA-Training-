# Day 23 — RESTful APIs & API Middleware

## Overview
This project implements a **RESTful API for course management** with the following features:

- CRUD operations (GET, POST, PUT, DELETE) for courses
- Input validation using `express-validator`
- API rate limiting using `express-rate-limit`
- Centralized error handling
- Versioned API endpoints (`/api/v1/courses`)

## API Endpoints

| Method | Endpoint | Description |
| GET    | /api/v1/courses        | Get all courses |
| GET    | /api/v1/courses/:id    | Get single course by ID |
| POST   | /api/v1/courses        | Create new course (name & duration required) |
| PUT    | /api/v1/courses/:id    | Update existing course (name & duration required) |
| DELETE | /api/v1/courses/:id    | Delete a course |

---

## Validation & Rate Limiting

- Validation: `name` and `duration` are **required fields**
- Rate limiting: **max 5 requests per minute** per IP address.

## How to Run

1. Install dependencies:

-  npm install
-  Start server: npm start
-  Access API via Postman/Browser: GET http://localhost:3000/api/v1/courses

## Error Handler
- Root route / shows a friendly message.
- Any invalid URL returns JSON { "error": "Route not found" }.

