const inquirer = require('inquirer')
const promptIntern = require('./internQuestions')
const promptManager = require('./managerQuestions')

function promptEngineer() {
    return inquirer
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
                    if (schoolInput) {
                        return true
                    } else {
                        console.log('Please enter a Github username');
                        return false
                    }

                }
            },
            {
                type: 'checkbox',
                name: 'role',
                message: 'Would you like to add another engineer or intern?',
                checkbox: ['Engineer', 'Intern', "No I'm Finished"]
            }
        ])
};

module.exports = promptEngineer