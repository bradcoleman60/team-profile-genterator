const Employee = require("../lib/employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    if (isNaN(officeNumber)) {
      throw new Error("Expected parameter 'officeNumber' to be a number");
    }
    if (typeof name !== "string") {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }

    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOffcieNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
