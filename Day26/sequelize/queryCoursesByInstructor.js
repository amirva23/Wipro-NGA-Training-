const sequelize = require("./db");
const Instructor = require("./models/Instructor");
const Course = require("./models/Course");

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Sequelize connected");

    await sequelize.sync({ force: true }); // reset tables for demo

    // Seed instructor + courses
    const inst = await Instructor.create({ name: "John Doe" });
    await Course.bulkCreate([
      { title: "JavaScript Basics", InstructorId: inst.id },
      { title: "Node.js Advanced", InstructorId: inst.id },
    ]);

    // Query: all courses by this instructor
    const instructorWithCourses = await Instructor.findOne({
      where: { id: inst.id },
      include: Course,
    });

    console.log(JSON.stringify(instructorWithCourses, null, 2));
  } catch (err) {
    console.error("Sequelize error:", err.message);
  } finally {
    await sequelize.close();
  }
}

main();
