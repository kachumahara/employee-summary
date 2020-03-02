const Employee = require('./Employee');

module.exports = class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email);
    }
getRole() {
    return "Engineer"
}
getGithub() {
    return this.github;
}
}
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
