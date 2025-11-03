// basic_queries.js
// Connect with mongo shell or use this file to copy queries into MongoDB Shell / Compass
// We'll add queries step-by-step in later steps.
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017"; // your local MongoDB
const client = new MongoClient(uri);

async function run() {
  try {
    console.log("⏳ Trying to connect...");
    await client.connect();
    console.log("✅ Connected to MongoDB successfully!");

    const db = client.db("greenpulse_db");
    const readings = db.collection("energy_readings");

    console.log("🔍 Fetching all energy readings...");
    const data = await readings.find({}).toArray();

    console.log(`📊 Found ${data.length} documents`);
    console.log(data);

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
    console.log("🔒 Connection closed.");
  }
}

run();
