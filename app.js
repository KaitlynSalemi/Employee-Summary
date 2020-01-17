// The project must generate a `team.html` page in the `output` directory

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "Name: ",
            name: "name"
        },
        {
            type: "input",
            message: "What is your Email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your id number?",
            name: "id"
        },
        {
            type: "list",
            message: "What is your role for the company?",
            name: "role",
            choices: ["Engineer", "Manager", "Intern"]
        },
        {
            type: "input",
            message: "Where do you go to school?",
            name: "school",
            when: (answers) => answers.role === "Intern"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github",
            when: (answers) => answers.role === "Engineer"
        },
        {
            type: "input",
            message: "What is your office room number?",
            name: "office",
            when: (answers) => answers.role === "Manager"
        }
    ])
    .then(function(response){
        console.log(response);

    });
        
        
   