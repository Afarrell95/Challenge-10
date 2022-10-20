const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const jest = require("jest");

const managerQuestions = [
  {
    type: "input",
    message: "Name?",
    name: "Manager's Name",
  },
  {
    type: "input",
    message: "Employee ID?",
    name: "Manager's ID",
  },
  {
    type: "input",
    message: "Email?",
    name: "Manager's Email",
  },
  {
    type: "input",
    message: "Office number?",
    name: "Manager's Office Number",
  },
];

const optionsQuestions = [
  {
    type: "list",
    message: "Add employee?",
    choices: ["yes", "no"],
    name: "new employee option",
  },
];

const roleQuestion = [
  {
    type: "list",
    message: "Engineer or Intern?",
    choices: ["Engineer", "Intern"],
    name: "roles",
  },
];

const EngineerQuestions = [
  {
    type: "input",
    message: "Name?",
    name: "Engineer's Name",
  },
  {
    type: "input",
    message: "Employee ID?",
    name: "Engineer's ID",
  },
  {
    type: "input",
    message: "Email?",
    name: "Engineer's Email",
  },
  {
    type: "input",
    message: "Github?",
    name: "Engineer's Github",
  },
];

const InternQuestions = [
  {
    type: "input",
    message: "Name?",
    name: "Intern's Name",
  },
  {
    type: "input",
    message: "Employee ID?",
    name: "Intern's ID",
  },
  {
    type: "input",
    message: "Email?",
    name: "Intern's Email",
  },
  {
    type: "input",
    message: "School?",
    name: "Intern's School",
  },
];

const init = () => {
  prompt()
    .then((answers) => writeFile("index.html", generateHTML(answers)))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
};

init();
