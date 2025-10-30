USE EduPro;

-- 1. Students with enrolled courses and instructors
SELECT s.StudentName, c.CourseName, i.InstructorName
FROM Enrollment e
JOIN Student s ON e.StudentID = s.StudentID
JOIN Course c ON e.CourseID = c.CourseID
JOIN Instructor i ON e.InstructorID = i.InstructorID;

-- 2. All courses with department names
SELECT c.CourseName, d.DeptName
FROM Course c
JOIN Department d ON c.DeptID = d.DeptID;

-- 3. All students and their courses (including no grade)
SELECT s.StudentName, c.CourseName, e.Grade
FROM Student s
LEFT JOIN Enrollment e ON s.StudentID = e.StudentID
LEFT JOIN Course c ON e.CourseID = c.CourseID;

-- 4. Instructors with no students assigned
SELECT i.InstructorName
FROM Instructor i
LEFT JOIN Enrollment e ON i.InstructorID = e.InstructorID
WHERE e.StudentID IS NULL;
