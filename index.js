//This makes the file system module of node available in this script
const fs = require("fs");

//This adds the inquire.js module to this script
const inquirer = require("inquirer");

//Require all supporting Javascript Files
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
// const Employee = require("./lib/employee");

// Creates a array to hold the team members as they are entered
var teamArray = [];

// These are the questions to be asked of the Manager
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
    type: "confirm",
    name: "enterEmployee",
    message: "Do you want to enter an employee profile now?",
  },
];

// These are the questions to be asked of the Engineer's or Interns
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
    type: "confirm",
    name: "enterAnother",
    message: "Do you want to add another employee?",
  },
];

/* This function initiates the prompts for the manager and after all questions are answered
this function also adds the manager to the employee and manager objects*/
function askManager() {
  inquirer.prompt(managerQuestions).then((answers) => {
    teamArray.push(
      new Manager(
        answers.Name,
        Number(answers.id),
        answers.email,
        Number(answers.OfficeNum)
      )
    );

    if (answers.enterEmployee === true) {
      askEmployee();
    } else {
      allTeamMembers(teamArray);
    }
  });
}

/* This function initiates the prompts for the engineers and the interns and after all questions are answered
this function also adds the manager to the employee and engineer/ intern objects*/
function askEmployee() {
  inquirer.prompt(employeeQuestions).then((answers) => {
    if (answers.engOrIntern === "Engineer") {
      teamArray.push(
        new Engineer(
          answers.Name,
          Number(answers.id),
          answers.Email,
          answers.Github
        )
      );
    } else {
      teamArray.push(
        (intern = new Intern(
          answers.Name,
          Number(answers.id),
          answers.Email,
          answers.school
        ))
      );
    }

    if (answers.enterAnother === true) {
      askEmployee(answers.enterAnother);
    } else {
      allTeamMembers(teamArray);
    }
  });
}

//This initiates the questions when "node index.js" is entered into the command line
askManager();

//This creates an empty array of cards
var cards = [];

/* This function aggregates all team members and uses a forEach loop to create a template 
literal of html that creates the cards for each employees that will be displayed on index.html*/
function allTeamMembers(teamArray) {
  var extra = "";

  teamArray.forEach((el) => {
    if (el.getRole() === "Manager") {
      extra = `<p class="card-text">Office Number: ${el.getOfficeNumber()}</p>`;
    }
    if (el.getRole() === "Engineer") {
      extra = `<a href="https://github.com/${el.getGithub()}" class="card-link">GitHub</a>`;
    }
    if (el.getRole() === "Intern") {
      extra = `<p class="card-text">School: ${el.getSchool()}</p>`;
    }

    cards.push(`<div class="card mx-auto" style="width: 18rem;">
    <div class="card-body bg-primary bg-gradient" style="--bs-bg-opacity: .75;">
      <h5 class="card-title">${el.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${el.getRole()}</h6>
      <p class="card-text">ID#: ${el.id}</p>
      <p class="card-text">Email: ${el.email}</p>
      ${extra}
      <a href="mailto:${el.email}" class="card-link">Email</a>
    </div>
    </div>`);
  });

  writeCards(cards);
}

/*This function creates the cards and is needed to convert the array of cards to a single string
using the reduce method*/
function writeCards(cards) {
  var newCards = cards.reduce((acc, el) => {
    return acc.concat(el);
  });
  createPage(newCards);
}

/* This function creates the index.html page*/
function createPage(newCards) {
  var page = `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Team Profile</title>
  </head>
  <body>
  <div class ="bg-danger">
    <h1><center>My Team Profile</center></h1>
</div>

<div class="container-xxl">
<div class="row">
    ${newCards}
    </div>
</div>

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <script src="./index.js"></script>
  </body>
</html>`;

  fs.writeFile("./dist/index.html", page, (err) => {
    if (err) throw err;
    console.log("The file is saved");
  });
}
