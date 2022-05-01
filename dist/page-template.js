
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

module.exports = generateManager