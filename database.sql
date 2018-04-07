-- current as of 4/7/18

CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);

CREATE TABLE "games" (
  "id" serial primary key,
  "gamename" varchar(80) not null UNIQUE,
  "maker" varchar(240) not null
);

SELECT * FROM games;

INSERT INTO games (gamename, maker) 
VALUES 
('Fallout', 'Fantasy Flight Games'),
('Catan', 'Fantasy Flight Games'),
('Cosmic Encounter', 'Fantasy Flight Games'),
('Doom', 'Fantasy Flight Games');

CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);

CREATE TABLE "questions" (
"question_asked" varchar(500) not null,
user_id INT REFERENCES users,
game_id INT REFERENCES games,
timestamp TEXT
);

SELECT * FROM questions;

CREATE TABLE "answers" (
user_id INT REFERENCES users,
"answer" varchar(500) not null,
timestamp TEXT
);

SELECT * FROM answers;