
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/page-template');
const inquirer = require('inquirer');



promptManager = async () => {
    const employeeData = []
    console.log(`
=================================================================
Welcome to TeamGen. Please enter your Team Manager's information.
=================================================================
`)

    managerData = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Please enter a name')
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's ID?",
                validate: idInput => {
                    if (idInput) {
                        return true
                    } else {
                        console.log('Please enter an ID')
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email?",
                validate: emailInput => {
                    if (emailInput) {
                        return true
                    } else {
                        console.log('Please enter an email')
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?",
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true
                    } else {
                        console.log('Please enter an office number')
                        return false
                    }
                }

            },
            {
                type: 'list',
                name: 'role',
                message: "Would you like to add an intern or an engineer?",
                choices: ['Intern', 'Engineer', "No, I'm Finished"],
            },
        ])


    const { name, id, email, officeNumber, role } = managerData
    employeeData.push(new Manager(name, id, email, officeNumber))
    if (role === 'Intern') {
        promptIntern(employeeData)
    } else if (role === 'Engineer') {
        promptEngineer(employeeData)
    } else if (role === "No, I'm Finished") {
        generatePage(employeeData)
    }
};

promptIntern = async (employeeData) => {
    console.log(`
    =============
    Add an intern
    =============
    `)
    internData = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Please enter a name');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's employee id?",
                validate: idInput => {
                    if (idInput) {
                        return true
                    } else {
                        console.log('Please enter an id');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?",
                validate: emailInput => {
                    if (emailInput) {
                        return true
                    } else {
                        console.log('Please enter an email');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Where did the intern attend school?',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true
                    } else {
                        console.log('Please enter a school');
                        return false
                    }

                }
            },
            {
                type: 'list',
                name: 'role',
                message: 'Would you like to add another intern or engineer?',
                choices: ['Intern', 'Engineer', "No, I'm Finished"],
            }
        ])
    const { name, id, email, school, role } = internData
    employeeData.push(new Intern(name, id, email, school))
    if  (role === 'Engineer') {
        promptEngineer(employeeData)
    } else if (role === 'Intern') {
        promptIntern(employeeData)
    } else if (role === "No, I'm Finished") {
     generatePage(employeeData)
    }

};

promptEngineer = async (employeeData) => {
    console.log(`
    ===============
    Add an engineer
    ===============
    `)
    engineerData = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Please enter a name');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's employee id?",
                validate: idInput => {
                    if (idInput) {
                        return true
                    } else {
                        console.log('Please enter an id');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?",
                validate: emailInput => {
                    if (emailInput) {
                        return true
                    } else {
                        console.log('Please enter an email');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's Github username?",
                validate: githubInput => {
                    if (githubInput) {
                        return true
                    } else {
                        console.log('Please enter a Github username');
                        return false
                    }

                }
            },
            {
                type: 'list',
                name: 'role',
                message: 'Would you like to add another engineer or intern?',
                choices: ['Engineer', 'Intern', "No I'm Finished"],
            }
        ])

        const { name, id, email, github, role } = engineerData
        employeeData.push(new Engineer(name, id, email, github))
        if (role === 'Intern') {
            promptIntern(employeeData)
        } else if (role === 'Engineer') {
            promptEngineer(employeeData)
        } else if (role === "No I'm Finished") {
        generatePage(employeeData)
        }
};

promptManager()