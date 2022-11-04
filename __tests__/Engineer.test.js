const Engineer = require("../getInput/Engineer");

test("Can create a github.", () => {
    const testGithub = "Zoujiejie";
    const employeeInstance = new Engineer("Jie", 1, "katnisszoujie@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Zoujiejie";
    const employeeInstance = new Engineer("Jie", 1, "katnisszoujie@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Jie", 1, "katnisszoujie@gmail.com", "Zoujiejie");
    expect(employeeInstance.getRole()).toBe(returnValue);
});