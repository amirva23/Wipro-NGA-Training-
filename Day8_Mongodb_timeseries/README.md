# MongoDB_TimeSeries_Demo

Demo for GreenPulse Energy — time-series energy readings.

Folder layout:
- data/energy_readings.json
- queries/*.js
- screenshots/

(Will fill with steps and outputs as we go.)

# MongoDB_TimeSeries_Demo — GreenPulse Energy

## Demo overview
This project demonstrates a MongoDB time-series design that stores smart meter energy readings and runs aggregations and optimizations for analytics.

## Files
- `data/energy_readings.json` — sample data
- `queries/basic_queries.js` — simple connection and `find` examples
- `queries/aggregate_queries.js` — aggregation pipelines (avg, max, total)
- `queries/filter_queries.js` — time-range, high usage, hourly trends
- `queries/index_optimization.js` — index creation and explain plan

## Steps to run (local)
1. Ensure MongoDB server is running (Compass connected).
2. From project root run:
   ```bash
   node queries/basic_queries.js
   node queries/aggregate_queries.js
   node queries/filter_queries.js
   node queries/index_optimization.js
