const express = require("express");
const path = require("path");
const app = express();

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Custom modules
const userRoutes = require("./routes/userRoutes");

// Routes
app.use("/api/users", userRoutes);

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
