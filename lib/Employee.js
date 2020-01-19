class Employee {
    constructor(name, id, email,role = "Employee"){
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
    }
    getName(){
        // get response.name from app.js
       return this.name
    }
    getId(){
        // get response.id from app.js
        return this.id
    }
    getEmail(){
        // get response.email from app.js
        return this.email
    }
    getRole(){
        // get response.role from app.js
        return this.role
    }
}   

module.exports = Employee;
