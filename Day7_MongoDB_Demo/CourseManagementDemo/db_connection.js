const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb+srv://amirva23:Amirva%40123@cluster0.awnobmy.mongodb.net/?appName=Cluster0";

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    const database = client.db("EduProDB");
    const courses = database.collection("courses");

    // Create sample data
    const sample = { title: "MERN Full Stack", description: "Advanced Web Dev Training" };
    const result = await courses.insertOne(sample);
    console.log("🎯 Course inserted:", result.insertedId);

    // Fetch all courses
    const list = await courses.find({}).toArray();
    console.log("📘 All Courses:", list);

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
    console.log("🔒 Connection closed");
  }
}

main();
