const inquirer = require("inquirer");
const { getAllEmployees, addEmployee } = require("../db/queries");

function viewAllEmployees() {
  getAllEmployees()
    .then((employees) => {
      console.table(employees);
    })
    .catch((error) => {
      console.error("Error fetching employees:", error);
    });
}

function addNewEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Enter the first name of the new employee:",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter the last name of the new employee:",
      },
      {
        type: "input",
        name: "roleId",
        message: "Enter the role ID of the new employee:",
      },
      {
        type: "input",
        name: "managerId",
        message:
          "Enter the manager ID of the new employee (leave blank if none):",
      },
    ])
    .then((answers) => {
      const { firstName, lastName, roleId, managerId } = answers;
      addEmployee(firstName, lastName, roleId, managerId)
        .then(() => {
          console.log("New employee added successfully!");
        })
        .catch((error) => {
          console.error("Error adding employee:", error);
        });
    });
}

module.exports = {
  viewAllEmployees,
  addNewEmployee,
};
