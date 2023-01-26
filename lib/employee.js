class Employee {
  constructor(name, id, email) {
    if (!name || !id || !email) {
      throw new Error();
    }
    if (typeof name !== "string") {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
    if (isNaN(id)){
        throw new Error("Expected parameter 'id' to be a number");
    }
    if (email.indexOf("@")== -1 || email =="" || email.indexOf(".") == -1) {
        throw new Error("Expected parameter 'email expected to be an email address")
    }

    this.name = name;
    this.email = email;
    this.id = id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
