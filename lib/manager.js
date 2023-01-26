const Employee = require('../lib/employee')

class Manager extends Employee {

    constructor(name, id, email, officeNumber){
    
       if (isNaN(officeNumber)){
            throw new Error("Expected parameter 'officeNumber' to be a number");}

        super(name,id,email);
        this.officeNumber = officeNumber
    }
    
    getOffcieNumber(){
        return this.officeNumber
    }

    getRole(){
        return "Manager"
    }
}

module.exports = Manager