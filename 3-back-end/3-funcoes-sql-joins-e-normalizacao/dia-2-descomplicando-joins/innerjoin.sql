SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;
-- 1
SELECT act.actor_id, act.first_name, fil.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS fil
ON act.actor_id = fil.actor_id;
-- 2
SELECT s.first_name, s.last_name, a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;
-- 3
SELECT c.customer_id, c.first_name, c.last_name, a.address_id, a.address
FROM sakila.customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;
-- 4
SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND first_name LIKE '%rene%';
-- 5
SELECT c.first_name, c.last_name, COUNT(r.customer_id) AS 'rental_movies'
FROM sakila.customer AS c
INNER JOIN sakila.rental AS r
ON c.customer_id = r.customer_id
WHERE c.active IS TRUE
GROUP BY c.customer_id
ORDER BY first_name DESC, last_name DESC;
-- 6
SELECT s.first_name, s.last_name AS full_name, AVG(p.amount) AS avg_amount
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;
-- 7
SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
INNER JOIN sakila.film AS f
ON a.actor_id = fa.actor_id AND fa.film_id = f.film_id;

-- 7 v2
SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa ON a.actor_id = fa.actor_id
INNER JOIN sakila.film AS f ON f.film_id = fa.film_id;
