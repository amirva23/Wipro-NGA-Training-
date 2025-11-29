const BASE_URL = "http://localhost:5000/api";

export async function fetchCourses() {
  const res = await fetch(`${BASE_URL}/courses`);
  return res.json();
}

export async function enrollCourse(payload) {
  const res = await fetch(`${BASE_URL}/enroll`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  return { status: res.status, body: data };
}
