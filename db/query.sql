SELECT id, dep_name AS department FROM department;

SELECT role.id, role.title, department.dep_name, role.salary
FROM role
JOIN department ON role.dep_id = department.id;

SELECT employee.id, employee.first_name, employee.last_name, role.title, department.dep_name, role.salary, employee.manager_id
FROM employee
JOIN role on employee.role_id = role.id
JOIN department on role.dep_id = department.id;

INSERT INTO department (dep_name)
	VALUES
    ("new Gaming dep");

INSERT INTO role (title, salary, dep_id)
	VALUES
    ("new Gamer", 150, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
    ("Edgar", "Martinex", 4, 5);

UPDATE employee
SET role_id = 1
WHERE id = 1;