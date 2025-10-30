// 1. Using let and const
const instituteName = "Wipro NextGen";
let courseName = "MERN Full Stack";

//  2. Spread Operator
const coreSubjects = ["HTML", "CSS", "JavaScript"];
const advancedSubjects = ["React", "Node.js", "MongoDB"];
const allSubjects = [...coreSubjects, ...advancedSubjects];

// 3. Arrow Function
const greet = (name) => `Welcome ${name} to the ${courseName} training program!`;

//  4. Class with constructor & method
class Student {
  constructor(name, age, skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
  }
  display() {
    return `👤 <strong>${this.name}</strong> | Age: ${this.age} | Skills: ${this.skills.join(", ")}`;
  }
}

// Creating objects using the class
const student1 = new Student("Amirtha", 22, ["HTML", "CSS", "JavaScript"]);
const student2 = new Student("Varshini", 18, ["React", "Node.js", "MongoDB"]);

//  5. Map to store grades
const grades = new Map();
grades.set("Amirtha", "A");
grades.set("Varshini", "B+");

// 6. Set for unique skills
const allSkills = new Set([...student1.skills, ...student2.skills]);

//  7. Function to display everything on webpage
function runDemo() {
  const output = document.getElementById("output");
  output.innerHTML = ""; // Clear previous content

  // Course Info
  output.innerHTML += `<h2>📘 Course Information</h2>`;
  output.innerHTML += `<p><strong>Institute:</strong> ${instituteName}</p>`;
  output.innerHTML += `<p><strong>Course:</strong> ${courseName}</p>`;

  // Subjects
  output.innerHTML += `<h2>📚 Subjects Covered</h2>`;
  output.innerHTML += `<p>${allSubjects.join(" | ")}</p>`;

  // Greetings using Arrow Function
  output.innerHTML += `<h2>👋 Greetings</h2>`;
  output.innerHTML += `<p>${greet(student1.name)}</p>`;
  output.innerHTML += `<p>${greet(student2.name)}</p>`;

  // Student Details using Class method
  output.innerHTML += `<h2>🎓 Student Details</h2>`;
  output.innerHTML += `<p>${student1.display()}</p>`;
  output.innerHTML += `<p>${student2.display()}</p>`;

  // Grades using Map
  output.innerHTML += `<h2>🏅 Student Grades</h2>`;
  grades.forEach((value, key) => {
    output.innerHTML += `<p>${key} ➝ Grade: <strong>${value}</strong></p>`;
  });

  // Unique Skills using Set
  output.innerHTML += `<h2>✨ Unique Skills (No Duplicates)</h2>`;
  output.innerHTML += `<p>${[...allSkills].join(", ")}</p>`;
}
