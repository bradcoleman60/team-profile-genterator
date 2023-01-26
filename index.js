//This makes the file system module of node available in this script
const fs = require("fs");

//This adds the inquire.js module to this script
const inquirer = require("inquirer");

//This adds link to components.js file
// var cp = require("./components");

//This is the object of the questions that will be answered in the terminal

// function Person (name, email,id){
//   this.name = name,
//   this.email = email,
//   this.id = id
// }

// class Manager extends Person (officeNum){
//   constructor(office){
//     this.officeNum = office
//   }
// };

// class Engineer extends Person (github){
//   constructor(github){
//     this.github = github
//   }
// };

// class Intern extends Person (school){
//   constructor(school){
//     this.school = school
//   }
// };


function Manager (name, email, id, office){
  this.name = name,
  this.email = email,
  this.id = id,
  this.officeNum = office
  
};
function Engineer (name, email, id, github){
  this.Name = name,
  this.email = email,
  this.id = id,
  this.github = github
  };
function Intern (name, email, id, school ){
  this.Name = name,
  this.email = email,
  this.id = id,
  this.school = school
};

const output =[];

const managerQuestions = [
  {
    type: "input",
    name: "Name",
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
    name: "id",
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
    name: "email",
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
    name: "OfficeNum",
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
    name: "Name",
    message: "Please Employee's Name:",
      },
  {
    type: "input",
    name: "id",
    message: "Please Employee's ID:",
   },
  {
    type: "input",
    name: "Email",
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
    const manager = new Manager(answers.Name, answers.email, answers.id, answers.OfficeNum)
    output.push(answers);
    if(answers.enterEmployee){
    askEmployee()
 } else (console.log(manager)) 
 } )
}

function askEmployee() {
  inquirer.prompt(employeeQuestions).then((answers) =>{
    if (answers.engOrIntern === 'Engineer'){
      const engineer = new Engineer(answers.Name, answers.email, answers.id, answers.github);
      
    } else{
      const intern = new Intern(answers.Name, answers.email, answers.id, answers.school);
      
    }
    askAgain(answers.enterAnother);
    console.log(answers.enterAnother)
    // output.push(answers);
    // if(answers.enterAnother){
    //   askEmployee()
    // } else {output.join(', ')}
    // console.log(intern)
  }    ) 
}

function askAgain (enterAnother){
  if(enterAnother = true){
    askEmployee()
  } else
  {console.log(manager)}
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
