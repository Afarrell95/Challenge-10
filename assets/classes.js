//make classes for Employee, engineer, intern

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  nameData() {
    return this.name;
  }
  idData() {
    return this.id;
  }
  emailData() {
    return this.email;
  }
}

class Engineer extends Employee {
  constructor(name, id, email, github) {
    this.github = github;

    super(name, id, email);
  }
  githubData() {
    return this.github;
  }
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    this.school = school;

    super(name, id, email);
  }
  schoolData() {
    return this.school;
  }
}

module.exports = Employee;
module.exports = Engineer;
module.exports = Intern;
