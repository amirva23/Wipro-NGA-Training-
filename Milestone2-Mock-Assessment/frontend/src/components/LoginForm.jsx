import React, { useState, useRef } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", passwordRef.current.value);
    setUsername("");
    passwordRef.current.value = "";
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    maxWidth: "300px",
    background: "#f1f6ff",
    borderRadius: "12px",
    border: "2px solid #a3d0ff",
    marginTop: "20px"
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  };

  const buttonStyle = {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#0077ff",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        style={inputStyle}
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={inputStyle}
        type="password"
        placeholder="Enter Password"
        ref={passwordRef}
      />
      <button style={buttonStyle}>Login</button>
    </form>
  );
}
