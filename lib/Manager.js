const Employee = require('./Employee')

class Manager extends Employee {
    constructor(employeeData) {
        super(employeeData);

        this.name = employeeData.name;
        this.id = employeeData.id;
        this.email = employeeData.email;
        this.role = 'Manager';
        this.officeNumber = employeeData.officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return this.role
    }
}

module.exports = Manager;