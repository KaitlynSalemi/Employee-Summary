const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const startHTML = require("./templets/Start.html");
// const managerHTML = require("./templets/Manager.html");
// const engineerHTML = require("./templets/Engineer.html");
// const internHTML = require("./templets/Inter.html");
// const endHTML = require("./templets/End.html");

const inquirer = require("inquirer");
var fs = require("fs");

managerInfo();

function managerInfo(){
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
        },
    ])
    .then(function(res){
        whatNext();
    })
}

function whatNext(){
    inquirer
        .prompt({
            name: "next",
            type: "list",
            message: "What team member would you like to add next?",
            choices: ["Engineer", "Intern", "I have no more team members to add"]
        })
        .then(function(res){
            console.log(res.next);
            switch (res.next) {
                case "Engineer":
                engineerQs();
                break;
        
                case "Intern":
                internQs();
                break;
        
                case "I have no more team members to add":
                generateHTML();
                break;
            }
        })
}

function engineerQs(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is their name?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "What is their Email?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is their id number?",
                name: "engineerid"
            },
            {
                type: "input",
                message: "What is their GitHub username?",
                name: "github"
            }
        ])
        .then(function(res){
            console.log(res);
            whatNext();
        })
}

function internQs(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is their name?",
                name: "internName"
            },
            {
                type: "input",
                message: "What is their Email?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What is their id number?",
                name: "internId"
            },
            {
                type: "input",
                message: "Where do they go to school?",
                name: "school"
            }
        ])
        .then(function(res){
            console.log(res);
            whatNext();
        })
}


    const employee = new Employee(response.name, response.id, response.email, response.role);
    const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.github)
    const intern = new Intern (response.internName, response.internId, response.internEmail, response.school)
    const manager = new Manager(response.name, response.id, response.email, response.office)
    // console.log(employee)
    // console.log(engineer)
    // console.log(intern)
    // console.log(manager)
    
    fs.writeFile("team.html", generateHTML(employee),function(err){
        if(err) throw err;
        console.log("success");
    })
            
    // if (response.role === "Engineer"){
        fs.appendFile("team.html", generateEngineer(engineer),function(err){
            if(err) throw err;
            console.log("success");
        })
    // } else if (response.role === "Intern"){
        fs.appendFile("team.html", generateIntern(intern),function(err){
            if(err) throw err;
            console.log("success");
        })
    // } else {
        fs.appendFile("team.html", generateManager(manager),function(err){
            if(err) throw err;
            console.log("success");
        })
    // }
    
    fs.appendFile("team.html", generateEnd(), function(err){
        if(err) throw err;
        console.log("success");
        
    })
        
