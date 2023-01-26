const Employee = require("../lib/employee")

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with name, email and id if provided valid arguments", () => {
            //Act
            const employeeTest = new Employee("Brad", '999', "bradcoleman60@gmail.com");

            //Verify that the new object has the correct properties
            expect(employeeTest.name).toEqual("Brad");
            expect(employeeTest.email).toEqual("bradcoleman60@gmail.com");
            expect(employeeTest.id).toEqual("999")
        })

        it("should return and error if no arguments are provided", () => {
            //Act
            const cb = () => new Employee();

            expect(cb).toThrow()
        })

        it("Should throw an error if provided a non string value for name", () =>{
            //Act
            const cb1 = () => new Employee(987, 2584, "bradcoleman60@gmail.com");
            const err = ("Expected parameter 'name' to be a non-empty string");

            //Verify that the correct error was thrown
            expect(cb1).toThrowError(err)
        })
        it("Should throw an error if provided a non number for id", () =>{
            //Act
            const cb2 = () => new Employee("Brad", "not a number", "bradcoleman60@gmail.com");
            const err2 = ("Expected parameter 'id' to be a number");

            //Verify that the correct error was thrown
            expect(cb2).toThrowError(err2)
        })
        it("Should throw an error if provided a non email address for email", () =>{
            //Act
            const cb3 = () => new Employee("Brad Coleman", 999 , "bradcoleman60");
            const err3 = ("Expected parameter 'email expected to be an email address");

            //Verify that the correct error was thrown
            expect(cb3).toThrowError(err3)
        })





        })





})