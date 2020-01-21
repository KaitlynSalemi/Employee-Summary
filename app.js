const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./generateHTML");
const generateEngineer = require("./generateEngineer");
const generateIntern = require("./generateIntern");
const generateManager = require("./generateManager");
const generateEnd = require("./generateEnd");

const inquirer = require("inquirer");
var fs = require("fs");

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
            type: "input",
            message: "What is your office room number?",
            name: "office",
            when: (answers) => answers.role === "Manager"
        },
        {
            type: "list",
            message: "What team member would you like to add next?",
            name: "role",
            choices: ["Engineer", "Intern", "I have no more team members to add"]
        },
        {
            type: "input",
            message: "What is their name?",
            name: "internName",
            when: (answers) => answers.role === "Intern"
        },
        {
            type: "input",
            message: "What is their Email?",
            name: "internEmail",
            when: (answers) => answers.role === "Intern"
        },
        {
            type: "input",
            message: "What is their id number?",
            name: "internId",
            when: (answers) => answers.role === "Intern"
        },
        {
            type: "input",
            message: "Where do they go to school?",
            name: "school",
            when: (answers) => answers.role === "Intern"
        },
        {
            type: "input",
            message: "What is their name?",
            name: "engineerName",
            when: (answers) => answers.role === "Engineer"
        },
        {
            type: "input",
            message: "What is their Email?",
            name: "engineerEmail",
            when: (answers) => answers.role === "Engineer"
        },
        {
            type: "input",
            message: "What is their id number?",
            name: "engineerid",
            when: (answers) => answers.role === "Engineer"
        },
        {
            type: "input",
            message: "What is their GitHub username?",
            name: "github",
            when: (answers) => answers.role === "Engineer"
        },
      
    ])
    .then(function(response){
        console.log(response);
        
        const employee = new Employee(response.name, response.id, response.email, response.role);
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        const intern = new Intern (response.name, response.id, response.email, response.school)
        const manager = new Manager(response.name, response.id, response.email, response.office)
        // console.log(employee)
        // console.log(engineer)
        // console.log(intern)
        // console.log(manager)
        
        fs.writeFile("team.html", generateHTML(employee),function(err){
            if(err) throw err;
            console.log("success");
        })
                
        if (response.role === "Engineer"){
            fs.appendFile("team.html", generateEngineer(engineer),function(err){
                if(err) throw err;
                console.log("success");
            })
        } else if (response.role === "Intern"){
            fs.appendFile("team.html", generateIntern(intern),function(err){
                if(err) throw err;
                console.log("success");
            })
        } else {
            fs.appendFile("team.html", generateManager(manager),function(err){
                if(err) throw err;
                console.log("success");
            })
        }
        
        fs.appendFile("team.html", generateEnd(), function(err){
            if(err) throw err;
            console.log("success");
            
        })

        
    });
                    
