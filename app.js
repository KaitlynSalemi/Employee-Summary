const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");

inquirer
    .prompt([
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
    ])
    .then(function(response){
        console.log(response.role);

        if(response.role === Intern){
            inquirer 
                .prompt ([
                    {
                        type: "input",
                        message: "Where do you go to school?",
                        name: "school"
                    },
                    
                ])
                .then(function(internRes){
                    console.log(internRes);
                    
                })
        } 
        else if (response.role === Engineer){
            inquirer
                .prompt ([
                    {
                        type: "input",
                        message: "What is your GitHub username?",
                        name: "github"
                    },
                ])
                .then(function(engineerRes){
                    console.log(engineerRes);
                    
                })
        } 
        else {
            inquirer
                .prompt ([
                    {
                        type: "input",
                        message: "What is your office room number?",
                        name: "office"
                    }
                ])
                .then(function(managerRes){
                    console.log(managerRes);
                    
                })
        }
    });
        
        
   