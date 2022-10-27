const Manager = require("./getInput/Manager.js");
const Engineer = require("./getInput/Engineer.js");
const Intern = require("./getInput/Intern.js");
const generateTeam = require("./generateHTML.js")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Run all prompt questions and functions
function runAPP() {
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

    //Prompt questions 2: manager/engineer/intern
    const Team = [];
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
        ]).then((answers) => {
            const managerHTML = new generateManager(answers);
            Team.push(managerHTML)
            chooseRole();
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

        ]).then((answers) => {
            const engineerHTML = generateEngineer(answers);
            Team.push(engineerHTML)
            chooseRole();
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

        ]).then((answers) => {
            const internHTML = generateIntern(answers);
            Team.push(internHTML)
            chooseRole();
        });
    }

    fs.writeFile('index.html', generateTeam(Team), (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

runAPP();