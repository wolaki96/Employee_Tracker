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
        name: "choose",
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
        if (choice.choose === "View All Departments") {
            viewDepartments();
        } else if (choice.choose === "View All Roles") {
            viewRoles(); 
        } else if (choice.choose === "View All Employees") {
            viewEmployees(); 
        } else if (choice.choose === "Add a Department") {
            addDepartment();
        } else if (choice.choose === "Add a Role") {
            addRole();
        } else if (choice.choose === "Add an Employee") {
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
    console.log("What department would you like to add?");
inquirer.prompt(
    {
        type: 'input',
        name: 'Department',
        answer: ""

    }
    
)
.then((answer) => {
    db.query('INSERT INTO department(department_name) VALUES (?)', answer.Department, function(err, res){
        if (err){
            throw err;
        } theMenu();
    })
})


};
function addRole(){
    db.query('SELECT * FROM department', function (err, res){
        if (err){
            throw err;
        }
        console.table(res);
    
// showing the list of choices so that the user can choose the department

    let chooseDepartment = res.map((department)=>{
        return {
            name: department.name,
            value: department.id
        }
    })
    
    inquirer.prompt([
        {
            type: 'list',
            name: 'departmentChoice',
            message: "What department is this role under?",
            choices: chooseDepartment, 
            
    
        },
        {   
            type: 'input',
            name: 'Role',
            answer: "",
           
        },
        {
            type: 'input',
            name: 'Salary',
            answer: "What is the salary of this role?",

           
        }
    ]
    )
.then((answer) => {
    db.query('INSERT INTO job_role(department_id, title, salary) VALUES (?, ?, ?)', [answer.departmentChoice, answer.Role, answer.Salary],  function (err, res){
        if (err){
            throw err;
    } theMenu();
})
})
})
};
function addEmployee(){
    // add roles
    db.query('SELECT id, title FROM job_role', function (err, res){
        if (err){
            throw err;
        }
        console.table(res);
    // let user see roles and role ids
    let role_selection = res.map((job_role)=>{
        return {
            name: job_role.id,
            // value: job_role.title
        }
        
    })
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            answer: "Choose the employee's job role",
            choices: role_selection
        },
        {
            type: 'input',
            name: 'firstname',
            answer: "First Name",
    
        },
        {
            type: 'input',
            name: 'lastname',
            answer: 'Last Name',
        },
       
    ])
    .then((answer) => {
        db.query('INSERT INTO employees(role_id, first_name, last_name) VALUES (?, ?, ?)', [answer.role, answer.firstname, answer.lastname],  function (err, res){
            if (err){
                throw err;
        } theMenu();
    })
})
})
};
function updateEmployee(){
    console.log("What would you like to update about the employee?");
    db.query('SELECT * FROM employees', function (err, res){
        if (err){
            throw err;
        }
        console.table(res);
    // let user see roles and role ids
    let employeeName = res.map((chooseEmployee)=>{
        return {
            name: chooseEmployee.first_name + " " + chooseEmployee.last_name
            
        }
};


// errors/connections to ports
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });