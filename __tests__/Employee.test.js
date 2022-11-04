const Employee = require("../getInput/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Jie";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 1;
    const employeeInstance = new Employee("Jie", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "katnisszoujie@gmail.com";
    const employeeInstance = new Employee("Jie", 1, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "Jie";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 1;
    const employeeInstance = new Employee("Jie", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "katnisszoujie@gmail.com";
    const employeeInstance = new Employee("Jie", 1, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Jie", 1, "katnisszoujie@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})

