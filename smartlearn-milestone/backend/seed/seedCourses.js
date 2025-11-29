require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('../models/Course');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  await Course.deleteMany({});

  await Course.insertMany([
    {
      courseId: 'C001',
      title: 'React for Beginners',
      category: 'Frontend',
      price: 299
    },
    {
      courseId: 'C002',
      title: 'Node & Express Mastery',
      category: 'Backend',
      price: 399
    }
  ]);

  console.log('Seeding complete');
  mongoose.disconnect();
}

seed();
