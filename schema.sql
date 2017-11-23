
DROP DATABASE IF EXISTS projdb;
CREATE DATABASE projdb;
USE projdb;


CREATE TABLE IF NOT EXISTS users (
  id int(6) NOT NULL AUTO_INCREMENT,
  firstname text ,
  lastname  text ,
  username  text NOT NULL,
  password  text NOT NULL,
  PRIMARY KEY  (id)
)AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS message (
  id int(6) NOT NULL AUTO_INCREMENT,
  body text ,
  subject text ,
  user_id int(6) ,
  recipient_id int(6) ,
  PRIMARY KEY (id),
  FOREIGN KEY (recipient_id) REFERENCES Users(id), -- Users id is a FOREIGN KEY as message 
  FOREIGN KEY (user_id) REFERENCES Users(id)      -- has a user that sends the message then a user that gets the message 
)AUTO_INCREMENT=1 ;

--

CREATE TABLE IF NOT EXISTS message_read (
  id          int(6) NOT NULL AUTO_INCREMENT,
  message_id  int(6) ,
  reader_id   int(6) ,
  mDate        text ,
  PRIMARY KEY (id),
  FOREIGN KEY (message_id) REFERENCES message(id), -- Users id is a FOREIGN KEY as message 
  FOREIGN KEY (reader_id) REFERENCES message(recipient_id) 
)AUTO_INCREMENT=1 ;


INSERT INTO users (firstname, lastname, password, username) VALUES 
('Fanme','Lname','Admin','password123'),
('Test','User','TestUser','Apassword123');