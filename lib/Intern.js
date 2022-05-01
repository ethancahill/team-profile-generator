const Employee = require('./Employee')
const inquirer = require('inquirer')


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.role = 'Intern';
        this.school = school;
    };
    getSchool() {
        return this.school
    };

    getRole() {
        return this.roll
    };
};


module.exports = Intern