import figlet from "figlet";
import chalk from "chalk";

figlet("Welcome to Node.js", (err, data) => {
  if (err) {
    console.error("Figlet error:", err);
    return;
  }
  console.log(chalk.green(data));
});
