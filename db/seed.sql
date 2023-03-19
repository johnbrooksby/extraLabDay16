CREATE TABLE customerName(
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR NOT NULL
);

CREATE TABLE main(
    id SERIAL PRIMARY KEY,
    main_dish VARCHAR NOT NULL
);

CREATE TABLE side(
    id SERIAL PRIMARY KEY,
    side_dish VARCHAR
);

CREATE TABLE drink(
    id SERIAL PRIMARY KEY,
    drink VARCHAR
);

CREATE TABLE pickup(
    id SERIAL PRIMARY KEY,
    pick_up FLOAT NOT NULL
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL REFERENCES customerName(id),
    main_dish INT NOT NULL REFERENCES main(id),
    side_dish INT REFERENCES side(id),
    drink_id INT REFERENCES drink(id),
    pickup_id INT NOT NULL REFERENCES pickup(id),
    is_togo BOOLEAN NOT NULL
);

insert into pickup(pick_up)
 VALUES ('4:00'),
 ('4:30'),
 ('5:00'),
 ('5:30'),
 ('6:00'),
 ('6:30'),
 ('7:00');

 INSERT INTO drink(drink)
 VALUES('Cola'),
 ('Yellow Drink'),
 ('Root Beer'),
 ('Ginger Ale'),
 ('Lemonade'),
 ('Water');

 