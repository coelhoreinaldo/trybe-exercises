INSERT INTO sakila.actor (first_name, last_name)
VALUES ('Marcelo', 'Santos');

SELECT * FROM sakila.actor;

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.staff;

SELECT * FROM sakila.staff;
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username)
VALUES ('Reinaldo', 'Coelho', 5, 2, 'Reinaldo');

INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username) VALUES 
('Azul', 'Claro', 5, 2, 'Azul'),
('Verde', 'Escuro', 5, 2, 'Verde');

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer LIMIT 5;

SELECT * FROM sakila.category;

INSERT INTO sakila.category (name)
VALUES ('Anime'), ('Romance');

SELECT * FROM sakila.store;

INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);
