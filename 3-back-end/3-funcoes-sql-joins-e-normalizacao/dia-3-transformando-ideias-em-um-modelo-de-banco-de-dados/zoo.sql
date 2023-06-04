DROP SCHEMA IF EXISTS zoo;
CREATE DATABASE zoo;
USE zoo;

CREATE TABLE species(
	specie_id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE locations(
	location_id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    age INT,
    gender VARCHAR(10) NOT NULL,
    specie_id INT NOT NULL,
    location_id INT NOT NULL,
    FOREIGN KEY (specie_id) REFERENCES species(specie_id),
    FOREIGN KEY (location_id) REFERENCES locations(location_id)
) ENGINE=InnoDB;

CREATE TABLE manager(
	manager_id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE caretaker(
	caretaker_id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES manager(manager_id)
);

CREATE TABLE animal_caretaker(
	animal_id INT NOT NULL,
    caretaker_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(animal_id, caretaker_id),
    FOREIGN KEY (animal_id) REFERENCES animal(animal_id),
    FOREIGN KEY (caretaker_id) REFERENCES caretaker(caretaker_id)
);
