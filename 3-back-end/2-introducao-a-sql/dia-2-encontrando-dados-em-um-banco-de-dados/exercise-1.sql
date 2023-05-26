USE Scientists;

SELECT "This is SQL Exercise, Practice and Solution"

SELECT 1, 2, 3;

SELECT 10 + 15;

SELECT 2 * 4 - 1; 

SELECT * FROM Scientists;

SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;

SELECT Name FROM Scientists
ORDER BY Name;

SELECT Name FROM Projects ORDER BY Name DESC;

SELECT CONCAT('O Projeto ', Name, 'precisou de ', Hours, ' horas para ser concluído.') as resultado FROM Projects;

SELECT Name, Hours FROM Projects ORDER BY Hours;

SELECT DISTINCT Project FROM AssignedTo;

SELECT * FROM Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;

SELECT * FROM Projects ORDER BY Hours ASC LIMIT 5;

SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists.') FROM Scientists;