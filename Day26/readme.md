project: "Day 26 — Database Connectivity"
description: "This project demonstrates persistent storage in SkillSphere using MySQL, MongoDB, and Sequelize ORM."

theme: "Database connectivity and persistence across SQL & NoSQL systems"

objectives:
  - "Store course information in MySQL"
  - "Retrieve user and enrollment details from MongoDB"
  - "Implement Instructor → Courses relationship using Sequelize ORM"


technologies_used:
  mysql: "mysql2 driver for relational storage"
  mongodb: "Mongoose ODM for document modeling"
  sequelize: "ORM for handling model relationships"
  nodejs: "Environment for backend execution"
  dotenv: "Secure environment variable management"

challenges:
  - challenge_1:
      name: "MySQL Integration"
      problem_statement: "Use mysql2 to insert course data"
      user_story: "As a developer, I want to store course information in MySQL"
      expected_output: "Course inserted successfully with row ID"
      command: "node mysql/courseInsert.js"

  - challenge_2:
      name: "MongoDB Integration"
      problem_statement: "Use Mongoose to model User and Enrollment collections"
      user_story: "As an admin, I want to retrieve user and enrollment details"
      expected_output: "Enrollment list with populated user details"
      command: "node mongodb/listEnrollments.js"

  - challenge_3:
      name: "Sequelize ORM"
      problem_statement: "Implement Instructor → Courses One-to-Many relationship"
      user_story: "As a backend developer, I want to fetch courses by an instructor"
      expected_output: "JSON including instructor + related courses"
      command: "node sequelize/queryCoursesByInstructor.js"