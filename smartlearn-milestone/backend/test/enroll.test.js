process.env.NODE_ENV = 'test';
const mongoose = require('mongoose');
const app = require('../server');
const supertest = require('supertest');
const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');
const request = supertest(app);
const { expect } = require('chai');

describe('Enrollment API', function() {
  before(async () => {
    await Course.deleteMany({});
    await Enrollment.deleteMany({});
    await Course.create({
      courseId: 'T001',
      title: 'Test Course',
      category: 'Test',
      price: 0
    });
  });

  it('returns 201 on successful enrollment', async () => {
    const res = await request
      .post('/api/enroll')
      .send({ userId: 'u1', courseId: 'T001' });
    expect(res.status).to.equal(201);
    expect(res.body.success).to.be.true;
  });

  it('duplicate enrollment returns 400', async () => {
    await request.post('/api/enroll').send({ userId: 'u2', courseId: 'T001' });

    const res = await request
      .post('/api/enroll')
      .send({ userId: 'u2', courseId: 'T001' });

    expect(res.status).to.equal(400);
    expect(res.body.success).to.be.false;
  });

  after(async () => {
    await Course.deleteMany({});
    await Enrollment.deleteMany({});
    mongoose.connection.close();
  });
});
