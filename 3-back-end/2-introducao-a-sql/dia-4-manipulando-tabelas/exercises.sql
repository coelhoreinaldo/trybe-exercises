SELECT * FROM pixar.movies;

INSERT INTO pixar.movies (title, director, `year`, length_minutes) VALUES
('Monstros SA', 'Peter Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);

SELECT * FROM pixar.box_office;

INSERT INTO pixar.box_office (movie_id, rating, domestic_sales, international_sales) VALUES
(9, 6.8, 450000000, 370000000);

UPDATE pixar.movies 
SET director = 'Andrew Stanton'
WHERE id = 9;

UPDATE pixar.movies 
SET title = 'Ratatouille', `year` = 2007
WHERE id = 3;

INSERT INTO pixar.box_office (movie_id, rating, domestic_sales, international_sales) VALUES
(8, 8.5, 300000000, 250000000),
(10, 7.4, 460000000, 510000000),
(11, 9.9, 290000000, 280000000);

SET SQL_SAFE_UPDATES = 0;
SELECT * from movies;
SELECT * from box_office;

DELETE FROM pixar.box_office WHERE movie_id = 9;
DELETE FROM pixar.movies WHERE title = 'Procurando Nemo';

SELECT id FROM pixar.movies WHERE director = 'Andrew Stanton';
DELETE FROM pixar.box_office WHERE movie_id = 2;
DELETE FROM pixar.movies WHERE director = 'Andrew Stanton';

