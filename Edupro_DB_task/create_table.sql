USE EduPro;

CREATE TABLE Department (
  DeptID INT AUTO_INCREMENT PRIMARY KEY,
  DeptName VARCHAR(100) NOT NULL
);

CREATE TABLE Student (
  StudentID VARCHAR(10) PRIMARY KEY,
  StudentName VARCHAR(100) NOT NULL
);

CREATE TABLE Instructor (
  InstructorID INT AUTO_INCREMENT PRIMARY KEY,
  InstructorName VARCHAR(100) NOT NULL,
  DeptID INT,
  FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

CREATE TABLE Course (
  CourseID INT AUTO_INCREMENT PRIMARY KEY,
  CourseName VARCHAR(150) NOT NULL,
  DeptID INT,
  FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

CREATE TABLE Enrollment (
  StudentID VARCHAR(10),
  CourseID INT,
  InstructorID INT,
  Grade CHAR(1),
  PRIMARY KEY (StudentID, CourseID, InstructorID),
  FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
  FOREIGN KEY (CourseID) REFERENCES Course(CourseID),
  FOREIGN KEY (InstructorID) REFERENCES Instructor(InstructorID)
);
