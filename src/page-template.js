const { rejects } = require('assert')
const fs = require('fs')

const generateManager = (managerArr) => {
    let managerHtml = ''
    managerArr.forEach(function(manager) {
        managerHtml +=
        `
        <div class="col" id="managerBox">
            <h3>
            Manager: ${manager.name}
            </h3>
                <div>
                    <p>
                    Id: ${manager.id}
                    </p>
                    </b>
                    <p>
                    Email: <a href="mailto: ${manager.email}>
                    </p>
                    <p>
                    Office Number: ${manager.officeNumber}
                    </p>
            </div>
        </div>
        `
    })
    return managerHtml
}

const generateIntern = (internArr) => {
    console.log(internArr)
    if (internArr.length === 0) {
        return ''
    } else {
        let internHtml = ''
        internArr.forEach(function(intern) {
            internHtml +=
                `
        <div class="col" id="managerBox">
            <h3>
            Intern: ${intern.name}
            </h3>
                <div>
                    <p>
                    Id: ${intern.id}
                    </p>
                    </b>
                    <p>
                    Email: <a href="mailto: ${intern.email}>
                    </p>
                    <p>
                    School: ${intern.school}
                    </p>
            </div>
        </div>
        `
        })
        return internHtml
    }
}

const generateEngineer = (engineerArr) => {
    console.log(engineerArr)
    if (engineerArr.length === 0 ) {
        return ''
    } else {
        let engineerHtml = ''
        engineerArr.forEach(function(engineer) {
            engineerHtml +=
                `
        <div class="col" id="managerBox">
            <h3>
            Engineer: ${engineer.name}
            </h3>
                <div>
                    <p>
                    Id: ${engineer.id}
                    </p>
                    </b>
                    <p>
                    Email: <a href="mailto: ${engineer.email}></a>
                    </p>
                    <p>
                    Github: <a href=https://www.github.com/${engineer.github}></a>
                    </p>
            </div>
        </div>
        `
        })
        return engineerHtml
    }
}

const generatePage = async (employeeData) => {
    const managerArr = employeeData.filter((employees) => employees.role == 'Manager');
    const internArr = employeeData.filter((employees) => employees.role == 'Intern');
    const engineerArr = employeeData.filter((employees) => employees.role == 'Engineer');

    let managers = await generateManager(managerArr)
    let engineers =  await generateEngineer(engineerArr)
    let interns = await generateIntern(internArr)

    pageHtml= `
    <!DOCTYPE html>
    <html lang="en">
  
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My Team</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        </head>

        <body>
            <header>
                <div class="container">
                    <div class="row">
                        <h1 class= "col">
                        My Team
                        </h1>
                    </div>
                </div>
            </header>

        <main class="container">
        ${managers}
        ${engineers}
        ${interns}
        </main>    
        </body>
    `
    fs.writeFile('./dist/index.html', pageHtml, err => {
        if (err) {
            console.log(err)
        } else {
            console.log('Page has been written')
        }
    })

}

module.exports = generatePage