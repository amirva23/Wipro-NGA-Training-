// mysql/courseInsert.js
const db = require('./db');

async function insertCourse() {
  try {
    const [result] = await db.execute(
      'INSERT INTO courses (title, description, level, price) VALUES (?, ?, ?, ?)',
      ['Node.js Basics', 'Intro course for beginners', 'Beginner', 499.00]
    );

    console.log('INSERT INTO courses successful!');
    console.log('Inserted row id:', result.insertId);
  } catch (err) {
    console.error('Error inserting course:', err.message);
  } finally {
    process.exit(0); // End the script
  }
}

insertCourse();
