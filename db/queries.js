const mysql = require("mysql");
const createConnection = require("./connection");

function getAllDepartments() {
  const connection = createConnection();
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM departments", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
      connection.end();
    });
  });
}

function getAllRoles() {
  const connection = createConnection();
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM roles", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
      connection.end();
    });
  });
}

function getAllEmployees() {
  const connection = createConnection();
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM employees", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
      connection.end();
    });
  });
}

function addDepartment(name) {
  const connection = createConnection();
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO departments (name) VALUES (?)",
      [name],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.insertId);
        }
        connection.end();
      }
    );
  });
}

function addRole(title, salary, departmentId) {
  const connection = createConnection();
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)",
      [title, salary, departmentId],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.insertId);
        }
        connection.end();
      }
    );
  });
}

function addEmployee(firstName, lastName, roleId, managerId) {
  const connection = createConnection();
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
      [firstName, lastName, roleId, managerId],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.insertId);
        }
        connection.end();
      }
    );
  });
}

function updateEmployeeRole(employeeId, roleId) {
  const connection = createConnection();
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE employees SET role_id = ? WHERE id = ?",
      [roleId, employeeId],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.affectedRows);
        }
        connection.end();
      }
    );
  });
}

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
