import React, { useEffect, useState } from "react";
import { fetchCourses, enrollCourse } from "../services/api";

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load courses on mount
  useEffect(() => {
    fetchCourses()
      .then((res) => {
        if (res.success) {
          setCourses(res.data);
        } else {
          setError("Failed to load courses");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Network error");
        setLoading(false);
      });
  }, []);

  const handleEnroll = async (courseId) => {
    const userId = "demoUser";

    const { status, body } = await enrollCourse({ userId, courseId });

    if (status === 201) {
      alert("Enrolled Successfully!");
      setEnrolled((prev) => [...prev, courseId]);
    } else if (body.message === "Duplicate enrollment") {
      alert("You already enrolled in this course!");
    } else {
      alert("Error: " + body.message);
    }
  };

  if (loading) return <div className="loading">Loading courses...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h2>Available Courses</h2>

      {courses.map((course) => (
        <div className="course-card" key={course.courseId}>
          <h3>{course.title}</h3>
          <p>Category: {course.category}</p>
          <p>Price: ₹{course.price}</p>

          <button onClick={() => handleEnroll(course.courseId)}>
            Enroll Now
          </button>

          {enrolled.includes(course.courseId) && (
            <span style={{ marginLeft: "10px", color: "green" }}>
              ✔ Enrolled
            </span>
          )}
        </div>
      ))}

      <h3>Your Enrollments:</h3>
      <ul>
        {enrolled.length === 0 ? (
          <li>No courses enrolled</li>
        ) : (
          enrolled.map((id) => <li key={id}>{id}</li>)
        )}
      </ul>
    </div>
  );
}
