

class Employee {
    constructor (employeeData) {
        this.name = employeeData.name;
        this.id = employeeData.id
        this.email = employeeData.email
        this.role = 'Employee'
        
    }
    
    getName(){
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return this.roll
    }
}

module.exports = Employee;