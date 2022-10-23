const inquirer = require("inquirer");
const Engineer = require("./assets/engineer");
const Intern = require("./assets/intern");
const Manager = require("./assets/manager");
// const fs = require("fs").promises;
// const jest = require("jest");
// const Employee = require("./assets/classes");
// const Engineer = require("./assets/engineer");
// const Intern = require("./assets/intern");

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

const init = () => {
  //prompt manager questions, prompt options question, if yes, prompt new employee question, if no, finish task. If new employee
  //prompt role question, if engineer, prompt engineer questions, if intern, prompt intern questions. prompt new employee question etc.
  //on finish taks, generate html
  inquirer.prompt(managerQuestions).then((answer) => {
    console.log(answer);
    let manager = new Manager(
      answer.managerName,
      answer.managerId,
      answer.managerEmail,
      answer.managerOfficeNumber
    );
    team.push(manager);
    inquirer.prompt(optionsQuestions).then((answer) => {
      if (answer === "no") {
        return;
        //write HTML file here
      } else {
        inquirer.prompt(roleQuestion).then((answer) => {
          if (answer === "Engineer") {
            inquirer.prompt(EngineerQuestions).then((answer) => {
              console.log(answer);
              let engineer = new Engineer(
                answer.engineerName,
                answer.engineerId,
                answer.engineerEmail,
                answer.engineerGithub
              );
              team.push(engineer);
            });
          } else {
            inquirer.prompt(InternQuestions).then((answer) => {
              console.log(answer);
              let intern = new Intern(
                answer.internName,
                answer.internId,
                answer.internEmail,
                answer.internSchool
              );
              team.push(intern);
            });
          }
        });
      }
    });
  });
};

init();
