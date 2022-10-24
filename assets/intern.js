const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  schoolData() {
    return this.school;
  }
  internData() {
    return data.intern;
  }
}

module.exports = Intern;
