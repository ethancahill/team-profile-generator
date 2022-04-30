const Employee = require('./Employee')

class Engineer extends Employee {
    constructor (employeeData) {
        super(employeeData);
        
        this.role = 'Engineer';
        this.name = employeeData.name;
        this.id = employeeData.id;
        this.email = employeeData.email;
        this.github = employeeData.github
    }
    getGithub() {
        return this.github;
    }

    getRoll() {
        return this.roll
    }
}


module.exports = Engineer