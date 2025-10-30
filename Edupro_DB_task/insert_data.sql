USE EduPro;

INSERT INTO Department (DeptName) VALUES
('Computer Science'),
('Information Technology');

INSERT INTO Student (StudentID, StudentName) VALUES
('S101', 'Amirtha '),
('S102', 'Rajan'),
('S103', 'Abinaya'),
('S104', 'Prajwal'),
('S105', 'Subiksha');

INSERT INTO Instructor (InstructorName, DeptID) VALUES
('Dr. Jaipriya', 1),
('Dr. Lara', 1),
('Dr. Reddy', 2);

INSERT INTO Course (CourseName, DeptID) VALUES
('Database Systems', 1),
('Data Structures', 1),
('Web Development', 2),
('Operating Systems', 1),
('Computer Networks', 2);

INSERT INTO Enrollment (StudentID, CourseID, InstructorID, Grade) VALUES
('S101', 1, 1, 'A'),
('S102', 2, 2, 'B'),
('S101', 2, 2, 'A'),
('S103', 3, 3, 'B'),
('S104', 4, 1, NULL);
