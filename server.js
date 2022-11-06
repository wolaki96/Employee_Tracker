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