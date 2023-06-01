USE sakila;
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)

SELECT AVG(length) AS `Média de Duração` FROM sakila.film;
SELECT MIN(length) AS `Duração Mínima` FROM sakila.film;
SELECT MAX(length) AS `Duração Máxima` FROM sakila.film;
SELECT SUM(length) AS `Tempo de Exibição Total` FROM sakila.film;
SELECT COUNT(film_id) AS `Filmes Registrados` FROM sakila.film;