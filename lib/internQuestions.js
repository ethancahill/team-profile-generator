const inquirer = require('inquirer')

function promptIntern() {
    return inquirer
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
                type: 'checkbox',
                name: 'role',
                message: 'Would you like to add another intern or engineer?',
                checkbox: ['Intern', 'Engineer', "No I'm Finished"]
            }
        ])

};

module.exports = promptIntern