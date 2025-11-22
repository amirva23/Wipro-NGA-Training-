const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());               // CORS FIX
app.use(bodyParser.json());

// Global Logger Middleware
app.use((req, res, next) => {
  console.log(`${req.method} → ${req.url}`);
  next();
});

// Sample products data
let products = [{ id: 1, name: "Pen", price: 10 }];

// GET /products
app.get("/products", (req, res) => res.json(products));

// POST /products + validation
app.post(
  "/products",
  body("name").isString().notEmpty(),
  body("price").isNumeric(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const newProduct = { id: products.length + 1, name: req.body.name, price: req.body.price };
    products.push(newProduct);
    res.status(201).json(newProduct);
  }
);

//  USERS ENDPOINT for Q4
app.get("/users/:id", (req, res) => {
  const sampleUsers = {
    1: { id: 1, name: "Arun Kumar", email: "arun@test.com", phone: "9876543210" },
    2: { id: 2, name: "Meena", email: "meena@test.com", phone: "9876501234" },
  };
  const user = sampleUsers[req.params.id];
  user ? res.json(user) : res.status(404).json({ error: "User not found" });
});

//  JWT Login
const STATIC_USER = { email: "admin@test.com", password: "12345" };
const SECRET = "my_secret_key";

app.post("/login", (req, res) => {
  if (req.body.email === STATIC_USER.email && req.body.password === STATIC_USER.password) {
    const token = jwt.sign({ email: req.body.email }, SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }
  res.status(401).json({ error: "Invalid credentials" });
});

//  Auth middleware
function authMiddleware(req, res, next) {
  const token = (req.headers.authorization || "").replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Sorry ! No token provided" });

  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}

//  Protected route
app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}` });
});

// Start server
app.listen(4000, () => console.log(" My Backend is running on port 4000"));
