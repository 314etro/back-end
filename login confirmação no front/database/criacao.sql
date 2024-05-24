create database site;
use site;

create table user (
idUsuario int not null primary key,
username varchar (20) not null, 
password  varchar (8) not null
);

insert into user (idUsuario, username, password) values
(1, "pietro", 123),(2, "aaa", 111);