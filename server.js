// requiring mysql2, express, inquirer, and port
const express = require('express');
const mysql2 = require('mysql2');
const inquirer = require('inquirer');


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
    console.log("connected to the Employee Tracker!")
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
        "Add a Department",
        "Add a Role",
        "Add an Employee"
    ]
        
    })
}
