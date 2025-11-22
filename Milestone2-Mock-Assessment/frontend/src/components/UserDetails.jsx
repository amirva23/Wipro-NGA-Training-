import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={{ fontSize: "20px", fontWeight: "600" }}>Loading user details...</p>;

  if (!user || user.error)
    return (
      <p style={{ fontSize: "20px", color: "red", fontWeight: "600" }}>
        User not found
      </p>
    );

  return (
    <div
      style={{
        background: "#fff3bf",
        border: "2px solid #ffcf33",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "330px",
        marginTop: "30px",
      }}
    >
      <h3 style={{ margin: "0 0 12px" }}>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
