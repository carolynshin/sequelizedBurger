-- Created the DB "burgers_db"
CREATE DATABASE burgers_db;
USE burgers_db;

-- Created table "burgers"
CREATE TABLE burgers (
	id INT AUTO_INCREMENT,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);