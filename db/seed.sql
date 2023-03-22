-- CREATE TABLE pickup(
--     id SERIAL PRIMARY KEY,
--     pick_up VARCHAR NOT NULL
-- );

-- CREATE TABLE drink(
--     id SERIAL PRIMARY KEY,
--     drink VARCHAR NOT NULL;
--)

-- CREATE TABLE orders(
--     id SERIAL PRIMARY KEY,
--     customer_name VARCHAR NOT NULL,
--     main_dish VARCHAR NOT NULL,
--     side_dish VARCHAR,
--     drink_id INT REFERENCES drink(id),
--     pickup_id INT NOT NULL REFERENCES pickup(id),
--     is_togo BOOLEAN NOT NULL
-- );


--  insert into pickup(pick_up)
--  VALUES ('4:00 PM'),
--  ('4:30 PM'),
--  ('5:00 PM'),
--  ('5:30 PM'),
--  ('6:00 PM'),
--  ('6:30 PM'),
--  ('7:00 PM');

-- INSERT INTO drink(drink)
--  VALUES('Cola'),
--  ('Yellow Drink'),
--  ('Root Beer'),
--  ('Ginger Ale'),
--  ('Lemonade'),
--  ('Water');

-- select orders.id, customer_name, main_dish, side_dish, drink, is_togo, pick_up
-- from orders
-- join drink
-- on drink.id = drink_id
-- join pickup
-- on pickup.id = pickup_id
-- ORDER BY pick_up;