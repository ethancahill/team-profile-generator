const inquirer = require('inquirer')


 promptManager = () => {
    console.log(`
=================================================================
Welcome to TeamGen. Please enter your Team Manager's information.
=================================================================
`)

    return inquirer
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
                name: 'officeNumber'

            },
            {
                type: 'list',
                name: 'role',
                message: "Would you like to add an intern or an engineer?",
                choices: ['Intern', 'Engineer', "No, I'm Finished"]
            },
        ])
};

module.exports = promptManager