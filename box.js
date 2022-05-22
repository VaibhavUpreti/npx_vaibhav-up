const chalk = require("chalk");
const boxen = require("boxen");
const boxData = {
  name: chalk.bold("      👋 Hey, I am Vaibhav Upreti\n  Programmer | Developer | Learner"),
  work: `${chalk.white("Member at")} ${chalk.bold("GDSC MAIT")}`,
  github: chalk.gray("https://github.com/") + chalk.blue("VaibhavUpreti"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.red("vaibhav-upreti-739b0421a"),
  npx: chalk.red("npx") + " " + chalk.white("vaibhav-up"),
  printWork: chalk.white.bold("       Work:"),
  printLinkedIn: chalk.white.bold("   LinkedIn:"),
  printGithub: chalk.white.bold("     GitHub:"),
  printCommd: chalk.white.bold("       Commd:"),
};

exports.Box = boxen(
  [
    `${boxData.name}`,
    ``,
    `${boxData.printWork}  ${boxData.work}`,
    ``,
    `${boxData.printGithub}  ${boxData.github}`,
    `${boxData.printLinkedIn}  ${boxData.linkedin}`,
    ``,
    `${boxData.labeprintCommdlCard}  ${boxData.npx}`,
    ``,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);