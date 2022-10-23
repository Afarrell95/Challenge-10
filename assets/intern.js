class Intern extends Employee {
  constructor(name, id, email, school) {
    this.school = school;

    super(name, id, email);
  }
  schoolData() {
    return this.school;
  }
}

module.exports = Intern;
