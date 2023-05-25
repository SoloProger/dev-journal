create table posts (
    id int primary key auto_increment,
    title varchar(50) not null,
    description text,
    created_at TIMESTAMP default current_timestamp,
    updated_at TIMESTAMP default current_timestamp
);