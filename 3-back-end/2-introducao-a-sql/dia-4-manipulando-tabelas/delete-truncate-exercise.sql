DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

DELETE FROM sakila.film_actor
WHERE actor_id = 7;

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

SELECT * FROM sakila.actor ORDER BY first_name;
-- 1
SELECT * FROM sakila.actor WHERE first_name = 'Karl';

DELETE FROM sakila.film_actor 
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- 2
SELECT * FROM sakila.actor WHERE first_name = 'Matthew';
DELETE FROM sakila.film_actor WHERE actor_id IN (8, 103, 181);
DELETE FROM sakila.actor WHERE first_name = 'Matthew';

-- 3
SELECT * FROM sakila.film_text WHERE description LIKE '%saga%';
DELETE FROM sakila.film_text WHERE description LIKE '%saga%';

-- 4
SELECT * FROM sakila.film_actor;
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;


