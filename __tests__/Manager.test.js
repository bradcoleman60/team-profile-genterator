const Employee = require("../lib/employee");
const Manager = require("../lib/manager")

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with name, email and id if provided valid arguments", () => {
            //Act
            const employeeTest = new Employee("Brad", '999', "bradcoleman60@gmail.com");

            //Verify that the new object has the correct properties
            expect(employeeTest.name).toEqual("Brad");
            expect(employeeTest.email).toEqual("bradcoleman60@gmail.com");
            expect(employeeTest.id).toEqual("999")

        })

        it("should return officeNumber along with  employee name, email and id", () => {
            //Act 
            const managerTest = new Manager("Karen",564725, "karen@gmail.com", 992251);

            //Verify that the new object has the correct properties
            expect(managerTest.name).toEqual("Karen");
            expect(managerTest.email).toEqual("karen@gmail.com");
            expect(managerTest.id).toEqual(564725);
            expect(managerTest.officeNumber).toEqual(992251);

        })
        it("Should throw an error if provided a non number for officeNumber", () =>{
            //Act
            const cb = () => new Manager("Brad Coleman", 58644, "bradcoleman60@gmail.com", "hshjjd7");
            const err = ("Expected parameter 'officeNumber' to be a number");

            //Verify that the correct error was thrown
            expect(cb).toThrowError(err)
        })
    })
})