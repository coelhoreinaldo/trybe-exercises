USE store;

SELECT * FROM store.itens WHERE name LIKE 'GR%';

SELECT * FROM store.supplies WHERE item_id = 2 ORDER BY supplier_id;

SELECT item_id, price, supplier_id FROM store.supplies WHERE supplier_id LIKE '%N%';

SELECT * FROM store.suppliers WHERE name LIKE '%LTDA%' ORDER BY name DESC;

SELECT COUNT(*) FROM store.suppliers WHERE id LIKE '%F%';

SELECT * FROM store.supplies WHERE price > 15 AND price < 40 ORDER BY price;

SELECT COUNT(*) FROM store.sales WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';