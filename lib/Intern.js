const Employee = require('./Employee')

class Intern extends Employee {
    constructor(employeeData) {
        super(employeeData)

        this.name = employeeData.name;
        this.id = employeeData.id;
        this.email = employeeData.email;
        this.role = 'Intern';
        this.school = employeeData.school;
    }
    getSchool() {
        return this.school
    }

    getRole() {
        return this.roll
    }
}

module.exports = Intern