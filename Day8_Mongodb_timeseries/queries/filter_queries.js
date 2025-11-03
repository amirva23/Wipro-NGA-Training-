// queries/filter_queries.js
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("greenpulse_db");
    const coll = db.collection("energy_readings");

    console.log("1) All readings for MTR001:");
    const mtr1 = await coll.find({ meterId: "MTR001" }).toArray();
    console.log(mtr1);

    console.log("\n2) Readings MTR001 between 2025-10-29 10:00 and 12:00 UTC:");
    const range = await coll.find({
      meterId: "MTR001",
      timestamp: {
        $gte: new Date("2025-10-29T10:00:00Z"),
        $lte: new Date("2025-10-29T12:00:00Z")
      }
    }).toArray();
    console.log(range);

    console.log("\n3) Readings with energy_kWh > 6:");
    const highUsage = await coll.find({ energy_kWh: { $gt: 6 } }).toArray();
    console.log(highUsage);

    console.log("\n4) Hourly energy consumption (sum per hour):");
    const hourly = await coll.aggregate([
      { $project: { hour: { $hour: "$timestamp" }, energy_kWh: 1 } },
      { $group: { _id: "$hour", totalEnergy: { $sum: "$energy_kWh" } } },
      { $sort: { _id: 1 } }
    ]).toArray();
    console.log(hourly);

    console.log("\n5) Meters with average energy > 5 (example comparison):");
    const avgMeters = await coll.aggregate([
      { $group: { _id: "$meterId", avgEnergy: { $avg: "$energy_kWh" } } },
      { $match: { avgEnergy: { $gt: 5 } } }
    ]).toArray();
    console.log(avgMeters);

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

run();
