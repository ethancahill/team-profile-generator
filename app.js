const promptManager = require('./lib/managerQuestions');
const promptIntern = require('./lib/internQuestions');
const promptEngineer = require('./lib/engineerQuestions');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const generateManager = require('./dist/page-template');







 promptManager()
    .then(managerData => {
        const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber)
        return manager
    })
    .then(generateManager(manager))
    .then(console.log(generateManager))

