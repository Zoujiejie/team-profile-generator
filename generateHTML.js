const generateTeam = team => {

    //Managers div
    const generateManager = manager => {
        return `
    <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `;
    };

    //Engineers div
    const generateEngineer = engineer => {
        return `
    <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
        `;
    };

    //Intern div
    const generateIntern = intern => {
        return `
    <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `;
    };
}

//Prompt questions -- managers/engineers/intern
function addManager() {
    inquirer.prompt([

        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },

        {
            type: "input",
            name: "managerId",
            message: "What is the manager's employee ID number?"
        },

        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?"
        },

        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
        }

    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        createTeam();
    });

}


function addEngineer() {
    inquirer.prompt([

        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },

        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's employee ID number?"
        },

        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?"
        },

        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?"
        }

    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        createTeam();
    });

}

function addIntern() {
    inquirer.prompt([

        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },

        {
            type: "input",
            name: "internId",
            message: "What is the intern's employee ID number?"
        },

        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?"
        },

        {
            type: "input",
            name: "internSchool",
            message: "What school does the intern attend?"
        }

    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        createTeam();
    });

}