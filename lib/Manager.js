const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        // (name, email, id, role)
        super(name, id, email, "Manager")
        this.officeNumber = officeNumber;

    }
    getOfficeNumber(){
        return this.officeNumber
    }
}

// (user input for office)
const manager = new Manager();

manager.getName();
manager.getId();
manager.getEmail();

module.exports = Manager;