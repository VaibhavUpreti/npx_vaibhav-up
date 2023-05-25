#!/usr/bin/env node
"use strict";
const inquirer = require("inquirer");
const chalk = require("chalk");
const info = require("./info.json");
const {Box} = require("./box.js");
// add response color
const response = chalk.white;

const resumeOptions = {
  type: "list",
  name: "resumeOptions",
  message: "What do you want to know?",
  choices: [...Object.keys(info), "🔴 Exit"]
};

function showResume() {
  console.log(Box);
  handleResume();
}

function handleResume() {
  inquirer.prompt(resumeOptions).then(answer => {
    if (answer.resumeOptions == "Exit") return;

    const options = info[`${answer.resumeOptions}`]
    if (options) {
      if(answer.resumeOptions=="🖥️ Projects")
      {
        console.log(response(new inquirer.Separator()));
        options.forEach(info => {
          console.log(response(" " + info));
        });
        console.log(response(new inquirer.Separator()));
      }
      else
      {
        console.log(response(new inquirer.Separator()));
        options.forEach(info => {
          console.log(response("📍" + info));
        });
        console.log(response(new inquirer.Separator()));
      }
    }
    //Handling Exit
    inquirer.prompt({
      type: "list",
      name: "exitBack",
      message: "Anything you missed or Exit?",
      choices: ["Back", "Exit"]
    }).then(choice => {
      if (choice.exitBack == "Back") {
        handleResume();
      } else {
        console.log("Thanks you 👍");
        return;
      }
    });
  }).catch(err => console.log('Oops,', err))
}
showResume();
