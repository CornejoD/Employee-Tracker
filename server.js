const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
const {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
} = require('./db/queries');



const question = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'taskOne',
        choices: ['view all departments', 'view all roles', 'view all employees'],
    },
];

function init() {
    console.log(' ');
    console.log('========== WELCOME ==========');
    console.log(' ');
    nextQuestion();
};

function nextQuestion() {
    inquirer
        .prompt (question)
        
        .then ((answer) => {
            switch (answer.taskOne) {
                case "view all departments":
                    getAllDepartments((err, results) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.table(results);
                            nextQuestion();
                        };
                    });
                    break;

                case "view all roles":
                    getAllRoles((err, results) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.table(results);
                            nextQuestion();
                        };
                    });
                    break;

                case "view all employees":
                    getAllEmployees((err, results) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.table(results);
                            nextQuestion();
                        };
                    });
                    break;

                    case "add a department":
                        addDepartment((err, results) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.table(results);
                                nextQuestion();
                            };
                        });
                        break;

                case "exit":
                    exit();
            };
        });
};
init();