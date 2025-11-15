
const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Student Skills Management API is running");
});
// ---------------- In-Memory Student List ----------------
let students = [
    // Example:
    // { id: 1, name: "Amit", skills: ["JS", "React"], course: "MERN" }
];

// -------------------- Middlewares -----------------------

// Log every incoming request
const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};
app.use(logger);

// Validate student exists by ID
const validateId = (req, res, next) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    req.student = student; // store found student
    next();
};

// Validate POST body
const validateStudentBody = (req, res, next) => {
    const { name, skills, course } = req.body;

    if (!name || !skills || !course) {
        return res.status(400).json({
            message: "name, skills, and course are required"
        });
    }
    if (!Array.isArray(skills)) {
        return res.status(400).json({
            message: "skills must be an array of strings"
        });
    }

    next();
};

// ---------------------------- Routes ----------------------------

// US-01: Get all students
app.get("/students", (req, res) => {
    res.json(students);
});

// US-02: Get student by ID
app.get("/students/:id", validateId, (req, res) => {
    res.json(req.student);
});

// US-03: Add new student
app.post("/students", validateStudentBody, (req, res) => {
    const { name, skills, course } = req.body;

    const newStudent = {
        id: students.length + 1,
        name,
        skills,
        course
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

// US-04: Update student details
app.put("/students/:id", validateId, (req, res) => {
    const student = req.student;

    const { name, skills, course } = req.body;

    if (name) student.name = name;
    if (skills) student.skills = skills;
    if (course) student.course = course;

    res.json(student);
});

// US-05: Delete a student
app.delete("/students/:id", validateId, (req, res) => {
    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.json({ message: "Student removed successfully" });
});

// ---------------------------------------------------------
app.listen(3000, () => console.log("Server running on port 3000"));
