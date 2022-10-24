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

module.exports = Employee;
