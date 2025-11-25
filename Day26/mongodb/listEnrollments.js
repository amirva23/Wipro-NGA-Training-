require("./db");
const User = require("./models/User");
const Enrollment = require("./models/Enrollment");

async function main() {
  try {
    // OPTIONAL: seed one user + enrollment if DB is empty
    let user = await User.findOne();
    if (!user) {
      user = await User.create({ name: "Amirva", email: "amirva@example.com" });
      await Enrollment.create({
        user: user._id,
        courseName: "Node.js Fundamentals",
      });
    }

    const enrollments = await Enrollment.find().populate("user");
    console.log("Enrollments with user details:\n");
    enrollments.forEach((e) => {
      console.log(
        `User: ${e.user.name} (${e.user.email}) → Course: ${e.courseName} on ${e.enrolledAt}`
      );
    });
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    process.exit(0);
  }
}

main();
