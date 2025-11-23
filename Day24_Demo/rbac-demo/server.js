const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

// ───────────────────────────────────────────────
// Fake Database
// ───────────────────────────────────────────────
const users = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    role: "admin"
  },
  {
    id: 2,
    username: "user",
    password: "user123",
    role: "user"
  }
];

const SECRET_KEY = "MYSECRET123";

// ───────────────────────────────────────────────
// Middleware: Verify Token
// ───────────────────────────────────────────────
function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // "Bearer token"

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  jwt.verify(token, SECRET_KEY, (err, userData) => {
    if (err) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }
    req.user = userData;
    next();
  });
}

// ───────────────────────────────────────────────
// Middleware: Role Based Access Control
// ───────────────────────────────────────────────
function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: Access denied" });
    }
    next();
  };
}

// ───────────────────────────────────────────────
// Register Route (Optional)
// ───────────────────────────────────────────────
app.post("/register", (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  users.push({
    id: users.length + 1,
    username,
    password,
    role
  });

  res.json({ message: "User registered successfully!" });
});

// ───────────────────────────────────────────────
// Login Route
// ───────────────────────────────────────────────
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ message: "Login successful", token });
});

// ───────────────────────────────────────────────
// PROTECTED ROUTES
// ───────────────────────────────────────────────

// 1. ANY logged-in user can access
app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "User profile data",
    user: req.user
  });
});

// 2. ONLY ADMIN can access
app.get("/admin", authMiddleware, authorizeRoles("admin"), (req, res) => {
  res.json({
    message: "Admin dashboard working!",
    user: req.user
  });
});

// 3. ONLY USER can access
app.get("/user-dashboard", authMiddleware, authorizeRoles("user"), (req, res) => {
  res.json({
    message: "User dashboard working!",
    user: req.user
  });
});

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to RBAC API. Use /login to get token.");
});

// ───────────────────────────────────────────────
// Start Server
// ───────────────────────────────────────────────
app.listen(3000, () => console.log("RBAC Server running on port 3000"));
