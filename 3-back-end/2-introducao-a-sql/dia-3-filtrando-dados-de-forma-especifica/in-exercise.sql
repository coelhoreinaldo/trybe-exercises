SELECT * FROM sakila.actor
WHERE first_name = 'PENELOPE'
OR first_name = 'NICK'
OR first_name = 'ED'
OR first_name = 'JENNIFER';

SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');

SELECT * FROM sakila.customer
WHERE customer_id IN (1, 2, 3, 4, 5);

SELECT * FROM sakila.payment
WHERE customer_id IN (269, 239, 126, 399, 142);

SELECT * FROM sakila.address
WHERE district IN ('Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');
