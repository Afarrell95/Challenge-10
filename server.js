const inquirer = require("inquirer");
const Engineer = require("./assets/engineer");
const Intern = require("./assets/intern");
const Manager = require("./assets/manager");
const Employee = require("./assets/employee");
const fs = require("fs").promises;
const jest = require("jest");

let team = [];

const managerQuestions = [
  {
    type: "input",
    message: "Name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "Employee ID?",
    name: "managerId",
  },
  {
    type: "input",
    message: "Email?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Office number?",
    name: "managerOfficeNumber",
  },
];

const optionsQuestions = {
  type: "list",
  message: "Add employee?",
  choices: ["yes", "no"],
  name: "newEmployeeOption",
};

const roleQuestion = {
  type: "list",
  message: "Engineer or Intern?",
  choices: ["Engineer", "Intern"],
  name: "roles",
};

const EngineerQuestions = [
  {
    type: "input",
    message: "Name?",
    name: "engineerName",
  },
  {
    type: "input",
    message: "Employee ID?",
    name: "engineerId",
  },
  {
    type: "input",
    message: "Email?",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "Github?",
    name: "engineerGithub",
  },
];

const InternQuestions = [
  {
    type: "input",
    message: "Name?",
    name: "internName",
  },
  {
    type: "input",
    message: "Employee ID?",
    name: "internId",
  },
  {
    type: "input",
    message: "Email?",
    name: "internEmail",
  },
  {
    type: "input",
    message: "School?",
    name: "internSchool",
  },
];

function addEmployee() {
  inquirer.prompt(optionsQuestions).then((answer) => {
    if (answer.newEmployeeOption === "no") {
      generateHtml();
    } else {
      inquirer.prompt(roleQuestion).then((answer) => {
        if (answer === "Engineer") {
          inquirer.prompt(EngineerQuestions).then((answer) => {
            let engineer = new Engineer(
              answer.engineerName,
              answer.engineerId,
              answer.engineerEmail,
              answer.engineerGithub
            );
            team.push(engineer);
            console.log(team);
          });
        } else {
          inquirer.prompt(InternQuestions).then((answer) => {
            let intern = new Intern(
              answer.internName,
              answer.internId,
              answer.internEmail,
              answer.internSchool
            );
            team.push(intern);
            console.log(team);
            addEmployee();
          });
        }
      });
    }
  });
}

function makePage() {
  const page = `<!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
   <title>Document</title>
 </head>
 <body>
   <div class="jumbotron jumbotron-fluid">
  <h1>Employee Info Generator</h1>
  </div>
<div class=row>
<p>${JSON.stringify(team)}</p>
</div
 </div>
 </body>
 </html>`;
  return page;
}

function generateHtml(fileName, data) {
  fs.writeFile("index.html", makePage(), (err) =>
    err ? console.log(err) : console.log("Successfully created HTML!")
  );
}

const init = () => {
  inquirer.prompt(managerQuestions).then((answer) => {
    console.log(answer);
    let manager = new Manager(
      answer.managerName,
      answer.managerId,
      answer.managerEmail,
      answer.managerOfficeNumber
    );
    team.push(manager);
    addEmployee();
  });
};

init();
