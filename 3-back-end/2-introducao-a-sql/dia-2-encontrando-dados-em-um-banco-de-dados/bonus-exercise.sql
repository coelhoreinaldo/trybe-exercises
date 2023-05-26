USE PiecesProviders

SELECT Piece, Price FROM Provides WHERE Provider = 'RBT';
SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;
SELECT * FROM Provides;
SELECT DISTINCT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4 OFFSET 3;
SELECT COUNT(Provider) FROM Provides WHERE Piece=1;

