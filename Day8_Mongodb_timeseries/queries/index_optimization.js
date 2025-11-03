// queries/index_optimization.js
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB for index optimization");

    const db = client.db("greenpulse_db");
    const coll = db.collection("energy_readings");

    // create indexes
    console.log("Creating index on timestamp...");
    const idx1 = await coll.createIndex({ timestamp: 1 });
    console.log("Created:", idx1);

    console.log("Creating compound index on meterId + timestamp...");
    const idx2 = await coll.createIndex({ meterId: 1, timestamp: 1 });
    console.log("Created:", idx2);

    // run explain on a range query (use executionStats if available)
    console.log("\nExplain (range query) - should use index:");
    const cursor = coll.find({
      meterId: "MTR001",
      timestamp: {
        $gte: new Date("2025-10-29T10:00:00Z"),
        $lte: new Date("2025-10-29T12:00:00Z")
      }
    });

    const explain = await cursor.explain("executionStats");

    if (explain && explain.executionStats) {
      console.log("Execution time (ms):", explain.executionStats.executionTimeMillis);
      console.log("Total docs examined:", explain.executionStats.totalDocsExamined);
      console.log("Total keys examined:", explain.executionStats.totalKeysExamined);
      console.log("Winning plan (brief):", explain.queryPlanner?.winningPlan?.stage || explain.queryPlanner?.winningPlan);
    } else {
      console.log("Explain output (no executionStats):");
      console.log(JSON.stringify(explain, null, 2));
    }

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
    console.log("🔒 Connection closed.");
  }
}

run();
