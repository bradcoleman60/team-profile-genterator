//This makes the file system module of node available in this script
const fs = require("fs");

//This adds the inquire.js module to this script
const inquirer = require("inquirer");

//This adds link to components.js file
// var cp = require("./components");

//This is the object of the questions that will be answered in the terminal

const output =[];

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the manager's name?",
    validate(answer) {
      if (answer.length < 1) {
        return `Please enter a valid name`;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "managerID",
    message: "What is the manager's ID",
    validate(answer) {
      if (answer.length < 1) {
        return `Please enter a valid ID`;
      }
      return true;
    },
  },
  
  {
    type: "input",
    name: "managerEmail",
    message: "What is the manager's email address?",
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
    name: "managerOfficeNum",
    message: "What is the manager's Office Number?",
    validate(answer) {
      if (answer.length < 1) {
        return `Please enter a valid office number`;
      }
      return true;
    },
  },
  {
    type: 'confirm',
    name: 'enterEmployee',
    message: 'Do you want to enter an employee profile now?'
  }
];

const employeeQuestions = [
  {
    type: "list",
    name: "engOrIntern",
    message: "Which type of employee do you want to enter?",
    choices: ["Engineer", "Intern"],
  },
  {
    type: "input",
    name: "employeeName",
    message: "Please Employee's Name:",
      },
  {
    type: "input",
    name: "employeeID",
    message: "Please Employee's ID:",
   },
  {
    type: "input",
    name: "employeeEmail",
    message: "Please Employee's Email:",
    
    },
  {
    type: "input",
    name: "Github",
    message: "Please Engineer's GitHub UserName:",
    when: (answers) => answers.engOrIntern === "Engineer",
  },
  
  {
    type: "input",
    name: "school",
    message: "Please Intern's School:",
    when: (answers) => answers.engOrIntern === "Intern",
  },
  {
    type: 'confirm',
    name: 'enterAnother',
    message: 'Do you want to add another employee?',
    }
];

function askManager() {
  inquirer.prompt(managerQuestions).then((answers) =>{
    output.push(answers);
    if(answers.enterEmployee){
    askEmployee()
 } else (console.log(output)) 
 } )
}

function askEmployee() {
  inquirer.prompt(employeeQuestions).then((answers) =>{
    output.push(answers);
    if(answers.enterAnother){
      askEmployee()
    } else {output.join(', ')}
    
  }    ) 
}





askManager();

//   //This logs the answers
//   .then((answers) => {
//     //Using object destructuring made variables equal to the keys in the answer object
//     const {
//       title,
//       author,
//       email,
//       github,
//       description,
//       license,
//       installationSteps,
//       installationSteps2,
//       usage,
//       contribution,
//       testSteps,
//     } = answers;

//     //Deconstruct the installation steps to ensure that that only values are retrived
//     var outputData2 = installationSteps2.map(Object.values);

//     // Function used to create the installation steps that can be input into the template literal
//     var installString = "";
//     createInstallationString(outputData2);
//     function createInstallationString(outputData2) {
//       for (i = 0; i < outputData2.length; i++) {
//         installString = installString + outputData2[i] + "\n";
//       }
//     }

//     //Pass variables to the settestContent function
//     settextContent(
//       title,
//       author,
//       email,
//       github,
//       description,
//       license,
//       installationSteps,
//       usage,
//       contribution,
//       testSteps,
//       installString
//     );
//   });

// /* This sets the content (via a template literal string) of the readme document*/
// function settextContent(
//   title,
//   author,
//   email,
//   github,
//   description,
//   license,
//   installationSteps,
//   usage,
//   contribution,
//   testSteps,
//   installString
// ) {
//   var theHtmlPage = `XXXXXXXXXXXXXX 
  
//   Please also check the GitHub Repositories at: https://github.com/${github}/`;

//   writeReadme(theReadMe);
// }

// /*This function writes the readme document*/
// function writeReadme(theReadMe) {
//   fs.writeFile("SAMPLE_README.md", theReadMe, (err) => {
//     if (err) throw err;
//     console.log("The file is saved");
//   });
// }
