// db.js




const { MongoClient } = require("mongodb");

// ✅ Replace <password> with your real one — keep it inside quotes!
const uri = "mongodb+srv://amirva23:Amirva%40123@cluster0.awnobmy.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB!");

    const database = client.db("StudentDB");
    const collection = database.collection("Scores");

    // ➕ CREATE
    const student = { name: "Amirva", course: "MERN", score: 95 };
    await collection.insertOne(student);
    console.log("🎯 Document inserted successfully!");

    // 📖 READ
    const allStudents = await collection.find().toArray();
    console.log("📜 All Data:", allStudents);

    // ✏️ UPDATE
    await collection.updateOne(
      { name: "Amirva" },
      { $set: { score: 98 } }
    );
    console.log("🪄 Updated Amirva’s score!");

    // ❌ DELETE
    await collection.deleteOne({ name: "Amirva" });
    console.log("🗑️ Deleted Amirva’s record!");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

run();
