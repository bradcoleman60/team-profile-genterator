const Employee = require("../lib/employee");
const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with name, email and id if provided valid arguments", () => {
      //Act
      const employeeTest = new Employee(
        "Brad",
        "999",
        "bradcoleman60@gmail.com"
      );

      //Verify that the new object has the correct properties
      expect(employeeTest.name).toEqual("Brad");
      expect(employeeTest.email).toEqual("bradcoleman60@gmail.com");
      expect(employeeTest.id).toEqual("999");
    });
    it("should return and error if no arguments are provided", () => {
      //Act
      const cb = () => new Intern();

      expect(cb).toThrow();
    });

    it("Should throw an error if provided a non string value for name", () => {
      //Act
      const cb = () => new Intern(987, 2584, "bradcoleman60@gmail.com", "USC");
      const err = "Expected parameter 'name' to be a non-empty string";

      //Verify that the correct error was thrown
      expect(cb).toThrowError(err);
    });
    it("Should throw an error if provided a non number for id", () => {
      //Act
      const cb = () =>
        new Intern("Brad", "not a number", "bradcoleman60@gmail.com", "USC");
      const err = "Expected parameter 'id' to be a number";

      //Verify that the correct error was thrown
      expect(cb).toThrowError(err);
    });
    it("Should throw an error if provided a non email address for email", () => {
      //Act
      const cb = () => new Intern("Brad Coleman", 999, "bradcoleman60", "USC");
      const err = "Expected parameter 'email expected to be an email address";

      //Verify that the correct error was thrown
      expect(cb).toThrowError(err);
    });
    it("should return school along with  employee name, email and id", () => {
      //Act
      const internTest = new Intern("Kevin", 9999, "kevin@gmail.com", "USC");

      //Verify that the new object has the correct properties
      expect(internTest.name).toEqual("Kevin");
      expect(internTest.email).toEqual("kevin@gmail.com");
      expect(internTest.id).toEqual(9999);
      expect(internTest.school).toEqual("USC");
    });
    it("Should return role when getRole() function is called", () => {
      //Act
      const cb1 = new Intern(
        "Brad Coleman",
        58644,
        "bradcoleman60@gmail.com",
        "USC"
      );
      expect(cb1.getRole()).toBe("Intern");
    });
  });
});
