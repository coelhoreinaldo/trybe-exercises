# Dia 2 - Encontrando dados em um banco de dados

## Exercícios ```SELECT```

```sql
SELECT 'Olá, bem vindo ao SQL';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'Área de atuação';
SELECT 'Reinaldo' AS nome, 'Coelho' AS sobrenome, 'Brasília' AS 'cidade natal', 23 AS idade;
```

## Exercício bônus ```SELECT```

```sql
SELECT 13 * 8;
SELECT current_timestamp() AS 'Data Atual';
```

## Exercícios com Sakila ```SELECT```

```sql
USE sakila;

SELECT * FROM city;
SELECT first_name, last_name FROM customer;
SELECT * FROM rental;
SELECT title, description, release_year FROM film; 
SELECT * FROM sakila.actor;
```

## Exercícios ```CONCAT```

```sql
SELECT CONCAT(first_name, ' ', last_name) AS "Nome Completo" FROM sakila.actor;
SELECT CONCAT(title, ' ', release_year) AS "Lançamento do Filme" FROM sakila.film;
SELECT CONCAT(address, ' ', district) AS "Endereço" FROM sakila.address;
```
