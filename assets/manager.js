const Employee = require("./classes");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    this.officeNumber = officeNumber;
    super((name, id, email));
  }
}

module.exports = Manager;
