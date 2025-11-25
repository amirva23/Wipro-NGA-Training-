const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Instructor = require("./Instructor");

const Course = sequelize.define("Course", {
  title: { type: DataTypes.STRING, allowNull: false },
});

Instructor.hasMany(Course);
Course.belongsTo(Instructor);

module.exports = Course;
