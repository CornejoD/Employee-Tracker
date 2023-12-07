const inquirer = require('inquirer');
const connection = require('../config/connection');

function getAllDepartments(callback) {
    const query = 
        `SELECT id, dep_name AS department 
        FROM department;`;
    connection.query(query, (err, results) => {
        if(err) {
            callback(err, null);
        }
        else {
            callback(null, results);
        }
    });
};

function getAllRoles(callback) {
    const query = 
        `SELECT role.id, role.title, department.dep_name, role.salary 
        FROM role 
        JOIN department 
        ON role.dep_id = department.id;`;
    connection.query(query, (err, results) => {
        if(err) {
            callback(err, null);
        }
        else {
            callback(null, results);
        }
    });
};

function getAllEmployees(callback) {
    const query = 
        `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.dep_name, role.salary, employee.manager_id
        FROM employee
        JOIN role on employee.role_id = role.id
        JOIN department on role.dep_id = department.id;`;
    connection.query(query, (err, results) => {
        if(err) {
            callback(err, null);
        }
        else {
            callback(null, results);
        }
    });
};


module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees
}