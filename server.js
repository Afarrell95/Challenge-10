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
    if (answer === "no") {
      const htmlContent = GenerateHTML.generateHtml(data);
      fs.writeFile("index.html", htmlContent, (err) =>
        err ? console.log(err) : console.log("Successfully created HTML!")
      );
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
