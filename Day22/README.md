# Day 22 - Forms, Database, and Authentication

## Project Overview
This project demonstrates form handling, data validation, MongoDB integration, and secure user authentication with role-based access control (RBAC).

## Features Implemented

1. **Registration Form**
   - Users can register with first name, last name, email, and password.
   - Passwords are hashed using `bcrypt` before storing in the database.

2. **Database Integration**
   - User data is stored in MongoDB (`wiproDB`) in the `users` collection.
   - Used Mongoose for schema definition and database operations.

3. **Authentication**
   - Users can log in with email and password using `Passport.js`.
   - Sessions are managed using `express-session`.

4. **Role-Based Access Control (RBAC)**
   - Admin users can access `/admin` route.
   - Non-admin users attempting `/admin` see “Access Denied”.

## Technology Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- Passport.js (Local Strategy)
- bcrypt (password hashing)
- express-session (session management)
- body-parser (form handling)

## Setup Instructions
1. Clone the repository and open in VS Code.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with the following:

## 4. Run the server:
- node server.js

## Open browser and test:

- Registration: http://localhost:3000/register
- Login: http://localhost:3000/login
- Admin route: http://localhost:3000/admin (for admin users)