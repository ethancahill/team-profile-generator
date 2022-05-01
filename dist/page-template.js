
const generateManager = manager => {
    return `
    <section class="container">
        <div class="row">
            <div class="col">
                <div id="managerTitle">
                    <h2>
                        ${manager.role}
                    </h2>
                    <h3>
                        ${manager.name}
                    </h3>
                </div>
                <div id="managerInfo">
                    <p> ID: ${manager.id} </p>
                    </b>
                    <a href = "mailto: ${manager.email}"> ${manager.email}</a>
                    </b>
                    <p> Office Number: ${manager.officeNumber}
                </div>
    `
}

const generateIntern = intern => {
    return `
    <section class="container">
        <div class="row">
            <div class="col">
                <div id="internTitle">
                    <h2>
                        ${intern.role}
                    </h2>
                    <h3>
                        ${intern.name}
                    </h3>
                </div>
                <div id="internInfo">
                    <p> ID: ${intern.id} </p>
                    </b>
                    <a href = "mailto: ${intern.email}"> ${manager.email}</a>
                    </b>
                    <p> School: ${intern.school}</p>
                </div>
    `
}

const generateEngineer = engineer => {
    return `
    <section class="container">
    <div class="row">
        <div class="col">
            <div id="engineerTitle">
                <h2>
                    ${engineer.role}
                </h2>
                <h3>
                    ${engineer.name}
                </h3>
            </div>
            <div id="engineerInfo">
                <p> ID: ${engineer.id} </p>
                </b>
                <a href = "mailto: ${engineer.email}"> ${engineer.email}</a>
                </b>
                <p> School: ${engineer.school}</p>
            </div>`
}

module.exports = generateManager