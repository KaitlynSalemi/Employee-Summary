const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(github){
        // (name, email, id, role)
        super()

    }
    getRole(){

    }
    getGithub(){

    }
}
// in () is the user's input for their github username
const engineer = new Engineer();

engineer.getName();
engineer.getId();
engineer.getEmail();
