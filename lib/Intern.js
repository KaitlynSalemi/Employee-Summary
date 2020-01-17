const Employee = require("./Employee");

class Intern extends Employee{
    constructor(school){
        // (name, email, id, role)
        super()
    }
    getRole(){

    }
    getSchool(){

    }
}

// (user input for school)
const intern = new Intern();

intern.getName();
intern.getId();
intern.getEmail();