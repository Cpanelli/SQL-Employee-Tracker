const { mainPrompt } = require('./utils/prompts');
const { viewAllDepartments, addNewDepartment } = require("./lib/department");
const { viewAllRoles, addNewRole } = require("./lib/role");
const { viewAllEmployees, addNewEmployee } = require("./lib/employee");

function main() {
  console.log("Welcome to the Employee Management System!");

  runMainPrompt();
}

function runMainPrompt() {
  mainPrompt()
    .then((answers) => {
      switch (answers.action) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addNewDepartment();
          break;
        case "Add a role":
          addNewRole();
          break;
        case "Add an employee":
          addNewEmployee();
          break;
        case "Update an employee role":
          // Implement update employee role functionality
          break;
        case "Exit":
          console.log("Exiting Employee Management System. Goodbye!");
          process.exit();
          break;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      process.exit(1);
    });
}

main();
