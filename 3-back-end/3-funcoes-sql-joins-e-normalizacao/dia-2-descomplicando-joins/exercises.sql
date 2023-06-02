USE pixar;
-- 1
SELECT m.title AS film, b.domestic_sales, b.international_sales
FROM pixar.box_office AS b
INNER JOIN pixar.movies AS m ON b.movie_id = m.id;
-- 2
SELECT m.title AS film, b.domestic_sales, b.international_sales
FROM pixar.box_office AS b
INNER JOIN pixar.movies AS m ON b.movie_id = m.id
WHERE b.domestic_sales < b.international_sales;
-- 3
SELECT m.title, b.rating
FROM pixar.movies AS m
INNER JOIN pixar.box_office AS b ON b.movie_id = m.id
ORDER BY b.rating DESC;
-- 4
SELECT t.*, m.title AS films_on_theater
FROM pixar.theater AS t
LEFT JOIN pixar.movies AS m ON m.theater_id = t.id
ORDER BY t.name;
-- 5
SELECT t.*, m.title AS films_on_theater
FROM pixar.theater AS t
RIGHT JOIN pixar.movies AS m ON m.theater_id = t.id
ORDER BY t.name;

SELECT * FROM box_office;
SELECT * FROM pixar.movies;
SELECT * FROM theater;
