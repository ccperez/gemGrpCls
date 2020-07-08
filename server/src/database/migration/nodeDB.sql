DROP TABLE IF EXISTS `class`;
  CREATE TABLE `class` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
  );

INSERT INTO `class` VALUES
  (1,'Class 1'),
  (2,'Class 2'),
  (3,'Class 3');  

DROP TABLE IF EXISTS `groups`;
  CREATE TABLE `groups` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
  );

INSERT INTO `groups` VALUES
  (1,'Green'),
  (2,'Yellow'),
  (3,'Blue');

DROP TABLE IF EXISTS `users`;
  CREATE TABLE `users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    `email` varchar(100) NOT NULL,
    `age` int NOT NULL,
    `gender` varchar(1) NOT NULL,
    `group_id` int NOT NULL,
    PRIMARY KEY (`id`)
  );

INSERT INTO `users` VALUES
  (13,'Richard Gere','richardgere@yahoo.com',10,'M',1),
  (14,'Tukul Arwana','tukul@yahoo.com',15,'F',3),
  (15,'Taylor Swift','tswift@yahoo.com',20,'M',2),
  (16,'Sigt Praseya','sigit@gmail.com',24,'F',2),
  (17,'Sigte Praseyat','cigit@gmail.com',24,'M',3),
  (18,'Conrad  Perez','conrad@email.com',26,'M',0);


DROP TABLE IF EXISTS `userCredentials`;
  CREATE TABLE `userCredentials` (
    `id` int NOT NULL,
    `email` varchar(100) NOT NULL,
    `password` varchar(100) NOT NULL,
    `role` int DEFAULT 0,
    PRIMARY KEY (`id`)
  );

INSERT INTO `userCredentials` VALUES
  (13, 'richardgere@yahoo.com', '', 0),
  (14, 'tukul@yahoo.com', '', 0),
  (15, 'tswift@yahoo.com', '', 0),
  (16, 'sigit@gmail.com', '', 0),
  (17, 'cigit@gmail.com', '', 0),
  (18, 'conrad@email.com', '', 1);  

DROP TABLE IF EXISTS `userclass`;
  CREATE TABLE `userclass` (
    `id_class` int NOT NULL,
    `id_user` int NOT NULL unique
  );

INSERT INTO `userclass` VALUES
  (1, 13),
  (2, 14),
  (2, 15),
  (3, 16),
  (3, 17);  

DROP VIEW IF EXISTS `vwUsersGroup`;
CREATE VIEW `vwUsersGroup` as
  SELECT g.id id_group, g.name group_name, u.id id_user, u.name, u.age
  FROM `users` u
  INNER JOIN `groups` g ON g.id = u.group_id
  WHERE u.id not in (select id_user  from userclass)
  ORDER BY g.id, u.age;

DROP VIEW IF EXISTS `vwUsersGroupCount`;
CREATE VIEW `vwUsersGroupCount` as
  SELECT g.id, g.name, count(u.group_id) count 
  FROM `users` u
  INNER JOIN `groups` g ON g.id = u.group_id 
  GROUP BY g.id 
  ORDER BY g.id;

DROP VIEW IF EXISTS `vwUsersGenderCount`;
CREATE VIEW `vwUsersGenderCount` as
  SELECT gender, count(gender) count 
  FROM users 
  GROUP BY gender;

DROP VIEW IF EXISTS `vwUsersGroupGenderCount`;
CREATE VIEW `vwUsersGroupGenderCount` as
  SELECT g.id, g.name, u.gender, count(u.gender) count 
  FROM `users` u
  INNER JOIN `groups` g ON g.id = u.group_id 
  GROUP BY g.id, u.gender 
  ORDER BY g.id;

DROP VIEW IF EXISTS `vwUsersClass`;
CREATE VIEW `vwUsersClass` as
  SELECT id_class, c.name class_name, id_user, u.name, age
  FROM userclass uc
  INNER JOIN users u On u.id = uc.id_user
  INNER JOIN class c On c.id = uc.id_class
  ORDER BY id_class, age;  
