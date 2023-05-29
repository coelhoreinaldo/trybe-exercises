SELECT * FROM sakila.customer WHERE email LIKE 'LEONARD%';

SELECT * FROM sakila.customer
WHERE active IS FALSE AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name;

SELECT title, description, release_year, rating, replacement_cost FROM sakila.film
WHERE rating <> 'NC-17' AND replacement_cost > 18.00
ORDER BY replacement_cost DESC, title
LIMIT 100;

SELECT COUNT(*) FROM sakila.customer WHERE active IS TRUE;

SELECT * FROM sakila.customer
WHERE store_id = 1 AND active IS FALSE;

SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;