const Manager = require("../getInput/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("Jie", 1, "katnisszoujie@gmailcom", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("Jie", 1, "katnisszoujie@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Jie", 1, "katnisszoujie@gmail.com", 1);
    expect(employeeInstance.getRole()).toBe(returnValue);
});