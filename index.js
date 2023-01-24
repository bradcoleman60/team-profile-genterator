//This makes the file system module of node available in this script
const fs = require("fs");

//This adds the inquire.js module to this script
const inquirer = require("inquirer");

//This adds the inquire prompt type of "loop"
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

//This adds link to components.js file
// var cp = require("./components");

//This is the object of the questions that will be answered in the terminal

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate(answer) {
        if (answer.length < 1) {
          return `Please enter a valid title`;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "author",
      message: "Please enter your full name",
      validate(answer) {
        if (answer.length < 1) {
          return `Please enter a valid author`;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address?",
      validate(answer) {
        if (
          answer == "" ||
          answer.indexOf("@") == -1 ||
          answer.indexOf(".") == -1
        ) {
          return "Please enter a valid email address";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your Git Hub user name",
    },

    {
      type: "editor",
      name: "description",
      message: "Please describe your project",
    },
    {
      type: "input",
      name: "usage",
      message: "Please describe the usage of your project",
    },

    {
      type: "input",
      name: "contribution",
      message: "Please provide contribution guidelines",
    },

    {
      type: "list",
      name: "license",
      message: "Please select a license you would like to use",
      choices: ["MIT", "ISC", "Unlicense"],
    },

    {
      type: "input",
      name: "testSteps",
      message: "Enter tests steps to ensure this project is working",
    },

    {
      type: "confirm",
      name: "installationStepsNeeded",
      message: "Would you like to add installation steps to your Readme?",
    },
    {
      type: "input",
      name: "installationSteps",
      message: "Enter the installation step here:",
      when: (answers) => answers.installationStepsNeeded === true,
    },
    {
      type: "loop",
      name: "installationSteps2",
      message: "Would you like to add another installation step?",
      when: (answers) => answers.installationStepsNeeded === true,
      questions: [
        {
          type: "input",
          name: "installationSteps2",
          message: "Enter the installation step here:",
        },
      ],
    },
  ])
  //This logs the answers
  .then((answers) => {
    //Using object destructuring made variables equal to the keys in the answer object
    const {
      title,
      author,
      email,
      github,
      description,
      license,
      installationSteps,
      installationSteps2,
      usage,
      contribution,
      testSteps,
    } = answers;})



    