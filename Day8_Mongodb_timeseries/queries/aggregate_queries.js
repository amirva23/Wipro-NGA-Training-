const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB for Aggregation Task");

    const db = client.db("greenpulse_db");
    const readings = db.collection("energy_readings");

    console.log("\n🔹 Average Energy Usage per Location:");
    const avgByLocation = await readings.aggregate([
      { $group: { _id: "$location", avgEnergy: { $avg: "$energy_kWh" } } }
    ]).toArray();
    console.table(avgByLocation);

    console.log("\n🔹 Maximum Temperature per Location:");
    const maxTemp = await readings.aggregate([
      { $group: { _id: "$location", maxTemp: { $max: "$temperature_C" } } }
    ]).toArray();
    console.table(maxTemp);

    console.log("\n🔹 Total Energy Consumed (All Locations):");
    const totalEnergy = await readings.aggregate([
      { $group: { _id: null, totalEnergy: { $sum: "$energy_kWh" } } }
    ]).toArray();
    console.log(totalEnergy[0]);

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
    console.log("🔒 Connection closed.");
  }
}

run();
