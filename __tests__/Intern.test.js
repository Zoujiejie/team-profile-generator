const Intern = require("../getInput/Intern");

test("Can create school.", () => {
    const testSchool = "Columbia";
    const employeeInstance = new Intern("Jie", 1, "katnisszoujie@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "Columbia";
    const employeeInstance = new Intern("Jie", 1, "katnisszoujie@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Jie", 1, "katnisszoujie@gmail.com", "Columnbia");
    expect(employeeInstance.getRole()).toBe(returnValue);
});