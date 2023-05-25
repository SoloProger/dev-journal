create table users (
    id int primary key auto_increment,
    name varchar(55) not null,
    surname varchar(155) not null,
    login varchar(50) not null,
    password text not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);