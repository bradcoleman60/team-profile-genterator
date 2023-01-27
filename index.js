//This makes the file system module of node available in this script
const fs = require("fs");

//This adds the inquire.js module to this script
const inquirer = require("inquirer");

//Require all supporting Javascript Files
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

//This adds link to components.js file
// var cp = require("./components");

var teamArray = [];

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

function askManager() {
  inquirer.prompt(managerQuestions).then((answers) => {
    console.log(answers)
     teamArray.push(new Manager(answers.Name, Number(answers.id), answers.email, Number(answers.OfficeNum)));

    if (answers.enterEmployee === true) {
      askEmployee();
    } else console.log(teamArray);
  });
}

function askEmployee() {
  inquirer.prompt(employeeQuestions).then((answers) => {
    if (answers.engOrIntern === "Engineer") {
    
      teamArray.push((new Engineer(answers.Name, Number(answers.id), answers.Email, answers.Github)));
    } else {
      
      teamArray.push((intern = new Intern(answers.Name, Number(answers.id), answers.Email, answers.school)));
    }

    if (answers.enterAnother === true) {
      askEmployee(answers.enterAnother);
    } else {
      allTeamMembers(teamArray);
      // console.log(teamArray);
    }
  });
}

// function askAgain(enterAnother) {
//   if (enterAnother === true) {
//     askEmployee();
//   } else {
//     console.log(teamArray);
//     for (i=0; i < teamArray.length; i++){
//       console.log(teamArray);
//       console.log(teamArray[i].getRole());
// console.log(teamArray[i][0].id);
// console.log(teamArray[i][0].name)
// console.log(teamArray[i][0].name)
// }

// }
// }

askManager();

var cards = []

function allTeamMembers(teamArray) {
  var card = ``;
    var extra = "";
    
  teamArray.forEach((el) => {
    
    if (el.getRole() === "Manager") {
       extra = `Office Number: ${el.getOfficeNumber()}`;
    }
    if (el.getRole() === "Engineer") {
      extra = `GitHub: ${el.getGithub()}`;
    }
    if (el.getRole() === "Intern") {
      extra = `School: ${el.getSchool()}`;
    }
        
    cards.push(`<div class="card" style="width: 18rem;">
    <div class="card-body bg-primary bg-gradient" style="--bs-bg-opacity: .75;">
      <h5 class="card-title">${el.name}Card title</h5>
      <h6 class="card-subtitle mb-2 text-muted">${el.getRole()}</h6>
      <p class="card-text">ID#: ${el.id}</p>
      <p class="card-text">Email: ${el.email}</p>
      <p class="card-text">${extra}</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
    </div>`)
  })
    
  
  writeCards(cards);
    
}


/*This function writes the readme document*/
function writeCards(cards) {
  var newCards = cards.reduce((acc, el) => {
    return acc.concat(el)

  });
  createPage(newCards)
  console.log(newCards)
  // fs.writeFile("SAMPLE_CARD.html", cards, (err) => {
  //   if (err) throw err;
  //   console.log("The file is saved");
  // });
}

function createPage (newCards){

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
    <h1>My Team Profile</h1>


<div class="container-xxl">100% wide until extra extra large breakpoint
    ${newCards}
</div>



    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <script src="./index.js"></script>
  </body>
</html>`

fs.writeFile("index.html", page, (err) => {
    if (err) throw err;
    console.log("The file is saved")}
    );

}
