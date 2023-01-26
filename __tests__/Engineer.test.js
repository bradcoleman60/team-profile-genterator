const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer")

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with name, email and id if provided valid arguments", () => {
            //Act
            const employeeTest = new Employee("Brad", 999, "bradcoleman60@gmail.com");

            //Verify that the new object has the correct properties
            expect(employeeTest.name).toEqual("Brad");
            expect(employeeTest.email).toEqual("bradcoleman60@gmail.com");
            expect(employeeTest.id).toEqual(999)

        })

        it("should return and error if no arguments are provided", () => {
            //Act
            const cb = () => new Engineer();

            expect(cb).toThrow()
        })

        it("Should throw an error if provided a non string value for name", () =>{
            //Act
            const cb1 = () => new Engineer(987, 2584, "bradcoleman60@gmail.com", "bradcoleman60");
            const err = ("Expected parameter 'name' to be a non-empty string");

            //Verify that the correct error was thrown
            expect(cb1).toThrowError(err)
        })
        it("Should throw an error if provided a non number for id", () =>{
            //Act
            const cb2 = () => new Engineer("Brad", "not a number", "bradcoleman60@gmail.com", "bradcoleman60");
            const err2 = ("Expected parameter 'id' to be a number");

            //Verify that the correct error was thrown
            expect(cb2).toThrowError(err2)
        })
        it("Should throw an error if provided a non email address for email", () =>{
            //Act
            const cb3 = () => new Engineer("Brad Coleman", 999 , "bradcoleman60", "bradcoleman60");
            const err3 = ("Expected parameter 'email expected to be an email address");

            //Verify that the correct error was thrown
            expect(cb3).toThrowError(err3)
        })

        it("should return github username", () => {
            //Act 
            const engineerTest = new Engineer("Mike", 8754, "mike@gmail.com", "mikegit78");

            //Verify that the new object has the correct properties
            expect(engineerTest.name).toEqual("Mike");
            expect(engineerTest.email).toEqual("mike@gmail.com");
            expect(engineerTest.id).toEqual(8754);
            expect(engineerTest.github).toEqual("mikegit78");
        })
        it("Should return role when getRole() function is called", () => {
            //Act
            const cb1 = new Engineer("Brad Coleman", 58644, "bradcoleman60@gmail.com", "bradcoleman60");
            expect(cb1.getRole()).toBe("Engineer")
        })
    })
})