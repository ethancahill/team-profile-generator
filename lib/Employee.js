

class Employee {
    constructor (employeeData) {
        this.name = employeeData.name;
        this.id = employeeData.id
        this.email = employeeData.email
        
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

    }
}

module.exports = Employee;