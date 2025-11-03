const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Your MongoDB connection string
const uri = "mongodb+srv://amirva23:Amirva%40123@cluster0.awnobmy.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);
const dbName = "EduProDB";

app.get("/", (req, res) => {
  res.send("✅ Course Management System Backend is running!");
});

// 🎯 Get all courses
app.get("/courses", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const courses = await db.collection("courses").find({}).toArray();
    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Failed to fetch courses" });
  } finally {
    await client.close();
  }
});

// ➕ Add new course
app.post("/courses", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection("courses").insertOne(req.body);
    res.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error("Error inserting course:", error);
    res.status(500).json({ error: "Failed to add course" });
  } finally {
    await client.close();
  }
});

// 🔧 Port setup
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
