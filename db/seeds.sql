INSERT INTO department (department_name)
VALUES ("Engineering"),
("Finance"),
("Legal"),
("Sales")

INSERT INTO employees (role_id, first_name, last_name, manager_id)
VALUES (2, "Iia", "Wolak", 0),
(8, "Emmett", "White", 0),
(3, "Kathryn", "Seed", 1),
(6, "Victoria", "Morgan", 0),
(4, "Logan", "Clinton", 0),
(7, "James", "Nichols", 2),
(1, "Cray", "Clark", 3),
(5, "Natalia", "Broadbent", 4) 

INSERT INTO job_role (department_id, title, salary)
VALUES (1, "Lead Engineer", 150000),
(1, "Software Engineer", 100000),
(2, "Account Manager", 120000),
(2, "Accountant", 110000),
(3, "Legal Team Lead", 250000),
(3, "Lawyer", 150000),
(4, "Sales Lead", 85000),
(4, "Sales Person", 75000)