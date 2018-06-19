-- Create the burgers_db.
CREATE DATABASE burgers_db;
-- Switch to or use the burgers_db.
USE burger_db;
-- Create a burgers table with these fields:
CREATE TABLE burgers (
    ID int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured boolean, 
    PRIMARY KEY (ID)
);


-- id: an auto incrementing int that serves as the primary key.

-- burger_name: a string.

-- devoured: a boolean.