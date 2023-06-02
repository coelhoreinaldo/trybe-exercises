USE hr;

SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.manager_id = Manager.employee_id;

-- 1
SELECT Employee.first_name AS employee, Manager.first_name AS manager
FROM employees AS Employee
INNER JOIN employees AS Manager
ON Employee.department_id <> Manager.department_id; 
-- 2
SELECT CONCAT(Manager.first_name, ' ', Manager.last_name) AS manager, COUNT(Employee.first_name) as employees_managed
FROM employees AS Manager
INNER JOIN employees AS Employee
ON Employee.manager_id = Manager.employee_id
GROUP BY Manager.employee_id;
SELECT * FROM employees;
