// Log Node.js version
console.log("Node.js Version:", process.version);

// Log current file & directory
console.log("Current File:", __filename);
console.log("Current Directory:", __dirname);

// Print welcome message every 3 seconds
const intervalId = setInterval(() => {
  console.log("Welcome to Node.js!");
}, 3000);

// Stop after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Timer stopped after 10 seconds.");
}, 10000);
