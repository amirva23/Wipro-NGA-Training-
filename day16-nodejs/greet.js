const moment = require("moment");

// Read name from command line
const name = process.argv[2];

// If user did not enter name → show message and exit
if (!name) {
  console.log("Please provide your name. Example: node greet.js John");
  process.exit(1);
}

// Format the current date/time
const formattedDate = moment().format("ddd MMM D YYYY, h:mm A");

// Print the greeting
console.log(`Hello, ${name}! Today is ${formattedDate}`);
