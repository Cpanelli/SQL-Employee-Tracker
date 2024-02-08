const inquirer = require("inquirer");
const { getAllDepartments, addDepartment } = require("./queries");

function viewAllDepartments() {
  getAllDepartments()
    .then((departments) => {
      console.table(departments);
    })
    .catch((error) => {
      console.error("Error fetching departments:", error);
    });
}

function addNewDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the name of the new department:",
      },
    ])
    .then((answers) => {
      const { name } = answers;
      addDepartment(name)
        .then(() => {
          console.log("New department added successfully!");
        })
        .catch((error) => {
          console.error("Error adding department:", error);
        });
    });
}

module.exports = {
  viewAllDepartments,
  addNewDepartment,
};
