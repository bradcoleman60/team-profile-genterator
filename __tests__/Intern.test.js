const Employee = require("../lib/employee");
const Intern = require("../lib/intern")

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with name, email and id if provided valid arguments", () => {
            //Act
            const employeeTest = new Employee("Brad", '999', "bradcoleman60@gmail.com");

            //Verify that the new object has the correct properties
            expect(employeeTest.name).toEqual("Brad");
            expect(employeeTest.email).toEqual("bradcoleman60@gmail.com");
            expect(employeeTest.id).toEqual("999")

        })

        it("should return school along with  employee name, email and id", () => {
            //Act 
            const internTest = new Intern("Kevin",9999, "kevin@gmail.com", "USC");

            //Verify that the new object has the correct properties
            expect(internTest.name).toEqual("Kevin");
            expect(internTest.email).toEqual("kevin@gmail.com");
            expect(internTest.id).toEqual(9999);
            expect(internTest.school).toEqual("USC");



        })
    })
})