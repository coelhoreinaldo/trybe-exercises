USE hr;

-- 1
SELECT MAX(salary) FROM hr.employees;
-- 2
SELECT MAX(salary) - MIN(salary) FROM hr.employees;
-- 3
SELECT job_id, AVG(salary) FROM hr.employees
GROUP BY job_id;
-- 4 
SELECT SUM(salary) FROM hr.employees;
-- 5
SELECT ROUND(MAX(salary), 2), ROUND(MIN(salary), 2), ROUND(SUM(salary), 2), ROUND(AVG(salary), 2) FROM hr.employees;
-- 6
SELECT COUNT(*) FROM hr.employees WHERE job_id = 'IT_PROG';
-- 7
SELECT job_id, SUM(salary) FROM hr.employees GROUP BY job_id;
-- 8
SELECT job_id, SUM(salary) FROM hr.employees GROUP BY job_id HAVING job_id = 'IT_PROG';
-- 9
SELECT job_id, AVG(salary) FROM hr.employees GROUP BY job_id HAVING job_id <> 'IT_PROG';
SELECT job_id, AVG(salary) FROM hr.employees WHERE job_id <> 'IT_PROG' GROUP BY job_id;
-- 10
SELECT AVG(salary), COUNT(employee_id) AS number_of_employees FROM hr.employees
GROUP BY department_id HAVING number_of_employees > 10;
-- 11
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, 515, 777)
WHERE phone_number LIKE '515%';
-- 12
SELECT * FROM hr.employees
WHERE LENGTH(first_name) > 8;
-- 13
SELECT employee_id, first_name, YEAR(hire_date) AS hire_year FROM hr.employees;
-- 14
SELECT employee_id, first_name, DAY(hire_date) AS hire_day FROM hr.employees;
-- 15
SELECT employee_id, first_name, MONTH(hire_date) AS hire_month FROM hr.employees;
-- 16
SELECT UCASE(first_name) FROM hr.employees;
-- 17
SELECT last_name, hire_date FROM hr.employees
GROUP BY hire_date
HAVING DATE(hire_date) BETWEEN '1987-07-01' AND '1987-07-31';
-- 18
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), DATE(hire_date)) 
AS days_worked FROM hr.employees;

SELECT * FROM hr.employees;
SELECT * FROM jobs;