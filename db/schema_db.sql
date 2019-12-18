DROP DATABASE IF EXISTS note_takerDB;

CREATE DATABASE note_takerDB;

USE note_takerDB;

CREATE TABLE notes
(
  id INT NOT NULL AUTO_INCREMENT,
  note_title VARCHAR (300) NOT NULL,
  note_text VARCHAR (300) NOT NULL,
  PRIMARY KEY(id)
);


