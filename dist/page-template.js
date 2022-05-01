
const generateManager = managerArr => {
    managerArr.forEach(manager => {
        return`
        <div class="col" id="managerBox">
            <h3>
            Manager: ${manager.getName()}
            </h3>
                <div>
                    <p>
                    Id: ${manager.getId()}
                    </p>
                    </b>
                    <p>
                    Email: <a href="mailto: ${manager.getEmail()}>
                    </p>
                    <p>
                    Office Number: ${manager.getOfficeNumber()}
                    </p>
            </div>
        </div>
        `
    })
}

const generateIntern = internArr => {
    return ``
}

const generateEngineer = engineerArr => {
    return 
}

const generatePage = (employeeData) => {
    const managerArr = employeeData.filter((employees) => employees.role == 'Manager');
    const internArr = employeeData.filter((employees) => employees.role == 'Intern');
    const engineerArr = employeeData.filter((employees) => employees.role == 'Engineer');

    return `
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

        <main class="container'>
            ${generateManager(managerArr)}
            ${generateEngineer(engineerArr)}
            ${generateIntern(internArr)}
        </main>    
        </body>
    `
}

module.exports = generatePage