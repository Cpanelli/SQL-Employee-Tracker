const inquirer = require("inquirer");
const { getAllRoles, addRole } = require("../db/queries");

function viewAllRoles() {
  getAllRoles()
    .then((roles) => {
      console.table(roles);
    })
    .catch((error) => {
      console.error("Error fetching roles:", error);
    });
}

function addNewRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter the title of the new role:",
      },
      {
        type: "input",
        name: "salary",
        message: "Enter the salary of the new role:",
      },
      {
        type: "input",
        name: "departmentId",
        message: "Enter the department ID of the new role:",
      },
    ])
    .then((answers) => {
      const { title, salary, departmentId } = answers;
      addRole(title, salary, departmentId)
        .then(() => {
          console.log("New role added successfully!");
        })
        .catch((error) => {
          console.error("Error adding role:", error);
        });
    });
}

module.exports = {
  viewAllRoles,
  addNewRole,
};
