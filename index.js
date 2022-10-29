const Manager = require("./getInput/Manager.js");
const Engineer = require("./getInput/Engineer.js");
const Intern = require("./getInput/Intern.js");
const {generateManager, generateEngineer, generateIntern, generateHTML} = require("./generateHTML.js")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Run all prompt questions and functions
// function runAPP() {
//Prompt questions 1: employee
function chooseRole() {
    inquirer.prompt([
        {
            type: "list",
            message: "What employee role would you like to add to your team?",
            name: "EmployeeRole",
            choices: ["Manager", "Engineer", "Intern", "No more employees needed"]
        }]).then(function (answers) {
            switch (answers.EmployeeRole) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    console.log("You have just created your team!")
            }
        })
}

chooseRole();

//Prompt questions 2: manager/engineer/intern
Team = [];
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },

        {
            type: "input",
            name: "id",
            message: "What is the manager's employee ID number?"
        },

        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?"
        },

        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }
    ]).then((answers) => {
        console.log(answers);
        const {name, id, email, officeNumber} = answers;
        const manager = new Manager (name, id, email, officeNumber);
        console.log(manager);
        const managerHTML = generateManager(manager);
        console.log(managerHTML);
        Team.push(managerHTML)
        chooseRole();
    });
}

function addEngineer() {
    inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },

        {
            type: "input",
            name: "id",
            message: "What is the engineer's employee ID number?"
        },

        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?"
        },

        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?"
        }

    ]).then((answers) => {
        const {name, id, email, github} = answers;
        const engineer = new Engineer (name, id, email, github);
        const engineerHTML = generateEngineer(engineer);
        Team.push(engineerHTML)
        chooseRole();
    });
}

function addIntern() {
    inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },

        {
            type: "input",
            name: "id",
            message: "What is the intern's employee ID number?"
        },

        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?"
        },

        {
            type: "input",
            name: "school",
            message: "What school does the intern attend?"
        }

    ]).then((answers) => {
        const {name, id, email, school} = answers;
        const intern = new Intern (name, id, email, school);
        const internHTML = generateIntern(intern);
        Team.push(internHTML)
        chooseRole();
    });
}

function createHTML() {
    fs.writeFile('index.html', generateHTML(Team), (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

// }

// runAPP();