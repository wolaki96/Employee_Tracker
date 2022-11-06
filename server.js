// requiring mysql2, express, inquirer, and port
const express = require('express');
const mysql2 = require('mysql2');
const inquirer = require('inquirer');
// to be able to see the table in the CLI
const table = require('console.table');




const PORT = process.env.PORT || 3001;
const app = express();

//database connection
const db = mysql2.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'A_PW6_MF5a?',
        database: 'employee_db'
    },
    console.log('Connected to the Local Host')
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
    .then((choice) => {
        if (choice.view === "View All Departments") {
            viewDepartments();
        } else if (choice.view === "View All Roles") {
            viewRoles(); 
        } else if (choice.view === "View All Employees") {
            viewEmployees(); 
        } else if (choice.view === "Add a Department") {
            addDepartment();
        } else if (choice.view === "Add a Role") {
            addRole();
        } else if (choice.view === "Add an Employee") {
            addEmployee();
           
        } else {
            updateEmployee();
        }
        });
    }
    
// functions to respond to questions


function viewDepartments() {
    console.log("Here are the current departments");
db.query("SELECT * FROM department", function (err, res){
    if (err) throw err;
    console.table(res);
    theMenu();

})
};

function viewRoles(){
console.log('Here are the current roles')
db.query("SELECT id, title FROM job_role", function (err, res){
    if (err) throw err;
    console.table(res);
    theMenu();
})
};

function viewEmployees(){
console.log('Here are the current Employees')
db.query("SELECT role_id, first_name, last_name FROM employees", function (err, res){
    if (err) throw err;
    console.table(res);
    theMenu();
})
};

function addDepartment() {

};
function addRole(){

};
function addEmployee(){

};
function updateEmployee(){

};


// errors/connections to ports
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });