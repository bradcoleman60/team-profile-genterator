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

        it("should return github username", () => {
            //Act 
            const engineerTest = new Engineer("Mike", 8754, "mike@gmail.com", "mikegit78");

            //Verify that the new object has the correct properties
            expect(engineerTest.name).toEqual("Mike");
            expect(engineerTest.email).toEqual("mike@gmail.com");
            expect(engineerTest.id).toEqual(8754);
            expect(engineerTest.github).toEqual("mikegit78");



        })
    })
})