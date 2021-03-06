const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./generateHTML");
const generateManager = require("./generateManager");
const generateEngineer = require("./generateEngineer");
const generateIntern = require("./generateIntern");
const generateEnd = require("./generateEnd");

const inquirer = require("inquirer");
const fs = require("fs");

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
    .then(function(response){
        // console.log(response);
        // const employee = new Employee(response.name, response.id, response.email, response.role);

        const manager = new Manager(response.name, response.id, response.email, response.office);

        fs.writeFile("team.html", generateHTML(manager),function(err){
            if(err) throw err;
        })


        // fs.appendFile("team.html", generateManager(manager),function(err){
        //     if(err) throw err;
        // })

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
                generateFinal();
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
                name: "engineerId"
            },
            {
                type: "input",
                message: "What is their GitHub username?",
                name: "github"
            }
        ])
        .then(function(response){
            // console.log(response);
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.github)

            fs.appendFile("team.html", generateEngineer(engineer),function(err){
                if(err) throw err;
            });

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
        .then(function(response){
            // console.log(response);
            const intern = new Intern (response.internName, response.internId, response.internEmail, response.school)

            fs.appendFile("team.html", generateIntern(intern),function(err){
                if(err) throw err;
            });

            whatNext();
        })
}

function generateFinal() {
    fs.appendFile("team.html", generateEnd(), function(err){
        if(err) throw err;
        console.log("Your Team Profile is Complete!");
    });
}


        
