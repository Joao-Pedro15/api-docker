CREATE TABLE users (
 id CHAR(36),
 name VARCHAR(255),
 email VARCHAR(255) UNIQUE,
 googleID VARCHAR(255) NULL,
 password VARCHAR(255) NULL,
 photo VARCHAR(255) NULL 
);

INSERT INTO users (
 id,
 name,
 email
) VALUES (
 '06980ea3-3767-41b1-88ea-331ae3496047',
 'joao monteiro',
 'joao.monteiro@gmail.com'
);