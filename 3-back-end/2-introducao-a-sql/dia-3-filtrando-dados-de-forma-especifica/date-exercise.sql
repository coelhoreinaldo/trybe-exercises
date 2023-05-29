SELECT * FROM sakila.payment;

SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';

SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';

SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:52';

SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';

SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';

SELECT * FROM sakila.payment
WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22';

SELECT DATE(rental_date) AS data,
YEAR(rental_date) AS ano, 
MONTH(rental_date) AS mes, 
DAY(rental_date) AS dia, 
HOUR(rental_date) AS hora,
MINUTE(rental_date) AS minuto,
SECOND(rental_date) AS segundo FROM sakila.rental WHERE rental_id = 10330;

SELECT * FROM sakila.payment WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;
