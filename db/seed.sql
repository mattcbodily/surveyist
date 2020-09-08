create table if not exists survey_user (
    user_id serial primary key,
    username varchar(50),
    email varchar(250),
    password varchar(250)
);