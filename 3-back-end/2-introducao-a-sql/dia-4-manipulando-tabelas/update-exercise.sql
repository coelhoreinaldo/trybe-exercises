SET sql_safe_updates=1, sql_select_limit=500, max_join_size=10000;
SET SQL_SAFE_UPDATES = 0;

SELECT * FROM sakila.actor WHERE first_name = 'JULES';

UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

SELECT * FROM sakila.category;

UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

SELECT * FROM sakila.film;

UPDATE sakila.film
SET rental_rate = 25.00
WHERE length > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20;

SELECT * FROM sakila.film;

UPDATE sakila.film
SET rental_rate = (
	CASE 		
		WHEN length BETWEEN 1 AND 100 THEN 10
		WHEN length > 100 THEN 20
END);
