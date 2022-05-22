const write = require("write");
const boxen = require("boxen");
const boxData = {
  name: write.bold("      👋 Hey, I am Vaibhav Upreti\n  Programmer | Developer | Learner"),
  work: `${write.white("Member at")} ${write.bold("GDSC MAIT")}`,
  github: write.gray("https://github.com/") + write.blue("VaibhavUpreti"),
  linkedin: write.gray("https://linkedin.com/in/") + write.red("vaibhav-upreti-739b0421a"),
  npx: write.red("npx") + " " + write.white("vaibhav-up"),
  printWork: write.white.bold("       Work:"),
  printLinkedIn: write.white.bold("   LinkedIn:"),
  printGithub: write.white.bold("     GitHub:"),
  printCommd: write.white.bold("       Commd:"),
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