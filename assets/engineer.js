const Employee = require("./classes");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    this.github = github;

    super(name, id, email);
  }
  githubData() {
    return this.github;
  }
}

module.exports = Engineer;
