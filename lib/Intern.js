const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        // (name, email, id, role)
        super(name, id, email, "Intern")
        this.school = school;
    }
    getSchool(){
        return this.school
    }
}

// (user input for school)
const intern = new Intern();

intern.getName();
intern.getId();
intern.getEmail();

module.exports = Intern;