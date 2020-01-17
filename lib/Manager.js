const Employee = require("./Employee");

class Manager extends Employee{
    constructor(office){
        // (name, email, id, role)
        super()

    }
    getRole(){

    }
    getOfficeNumber(){
        
    }
}

// (user input for office)
const manager = new Manager();

manager.getName();
manager.getId();
manager.getEmail();