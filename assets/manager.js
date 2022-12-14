const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  officeNumberData() {
    return this.officeNumber;
  }
  managerData() {
    return data.Manager;
  }
}

module.exports = Manager;
