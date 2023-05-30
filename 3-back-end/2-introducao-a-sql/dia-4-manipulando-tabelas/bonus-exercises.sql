USE pixar;

SELECT * FROM box_office;
UPDATE pixar.box_office
SET rating = (
CASE
	WHEN domestic_sales > 400000000 THEN 9.0
    WHEN domestic_sales > 200000000 AND international_sales < 300000000 THEN 6.0
    ELSE rating
END);

SELECT id FROM movies WHERE length_minutes < 100;
DELETE FROM pixar.box_office WHERE movie_id IN (1, 6, 7, 8);
DELETE FROM pixar.movies WHERE length_minutes < 100;

