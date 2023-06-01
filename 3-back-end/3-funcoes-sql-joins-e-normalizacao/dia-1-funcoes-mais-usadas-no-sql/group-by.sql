SELECT first_name FROM sakila.actor
GROUP BY first_name;
SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

SELECT rating, rental_rate, COUNT(4) as total FROM sakila.film
GROUP BY rating, rental_rate 
ORDER BY rating, rental_rate;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;
-- 1
SELECT active, COUNT(*) FROM sakila.customer
GROUP BY active;
-- 2
SELECT store_id, active, COUNT(*) FROM sakila.customer
GROUP BY store_id, active;
-- 3
SELECT rating, AVG(rental_duration) AS avg_rental_duration FROM sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;
-- 4
SELECT district, COUNT(address) AS district_quant FROM sakila.address
GROUP BY (district)
ORDER BY district_quant DESC;
