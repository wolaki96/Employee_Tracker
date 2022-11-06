// requiring mysql2, express, inquirer, and port
const express = require('express');
const mysql2 = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs');
const { allowedNodeEnvironmentFlags } = require('process');


const PORT = process.env.PORT || 3001;
const app = express();

//database connection
const db = mysql2.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'A_PW6_MF5a?',
        database: 'employee_db'
    }
)
// err if not connected/start connection
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the Employee Tracker!")
    theMenu();
})

function theMenu() {
    // open the menu of questions and being inquirer

inquirer
    .prompt({
        type: 'list',
        name: "view",
        choices: ["View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role"
    ]
    })
    // choices deploy functions to interact with tables
    .then(function ({ answer }) {
        switch (answer) {
            case "View All Departments":
            viewDepartments();
            break;

            case "View All Roles":
            viewRoles();
            break;

            case "View All Employees":
            viewEmployees();
            break;

            case "Add a Department":
            addDepartment();
            break;

            case "Add a Role":
            addRole();
            break;

            case "Add an Employee":
            addEmployee();
            break;

            case "Update an Employee Role":
            updateEmployee();
            break;
        }
    })}
// functions to respond to questions

function viewDepartments() {

}
function viewRoles(){

};

function viewEmployees(){

};

function addDepartment() {

};
function addRole(){

};
function addEmployee(){

};
function updateEmployee(){
    
};