INSERT INTO departments (name) VALUES ('Engineering');
INSERT INTO departments (name) VALUES ('Human Resources');
INSERT INTO departments (name) VALUES ('Marketing');

INSERT INTO roles (title, salary, department_id) VALUES ('Software Engineer', 80000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('HR Manager', 60000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Marketing Specialist', 55000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Chris', 'Panelli', 1, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Natsumi', 'Panelli', 2, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Kokomi', 'Panelli', 3, 1);
