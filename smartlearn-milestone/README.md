# SmartLearn — Final Milestone

## Overview
Simple MERN app implementing course catalog and enrollment APIs and React frontend.

## Folder structure
(Include the structure as in the submission.)

## Prerequisites
- Node 18+, npm
- MongoDB running at mongodb://localhost:27017

## Backend
1. cd backend
2. copy .env (example provided)
3. npm install
4. node seed/seedCourses.js
5. npm run dev
6. Endpoints:
   - POST /api/courses
   - GET /api/courses
   - POST /api/enroll

## Frontend
1. cd frontend
2. npm install
3. npm start

## Tests
From backend:  npm test 

## Frontend Features

Fetch courses from backend

Display loading & error states

Enroll users

Show enrollment success message

Show duplicate error handling

Display enrolled courses list

Custom favicon + title

Clean UI using custom CSS
## Frontend runs at: `http://localhost:3000`