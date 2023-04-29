CREATE DATABASE manseitwitter;

CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    usuario VARCHAR(40),
    apelido VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES usuarios(id),
    texto VARCHAR(200) NOT NULL,
    tempo TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

INSERT INTO usuarios (usuario, apelido) VALUES ('manseira0129', 'O MESTRE');
INSERT INTO usuarios (usuario, apelido) VALUES ('toninho22', 'Tone Mahone');
INSERT INTO usuarios (usuario, apelido) VALUES ('cleitinrasta', 'Cleito');
INSERT INTO posts (user_id, texto, tempo) VALUES (1, 'Fala povo', NOW());
INSERT INTO posts (user_id, texto, tempo) VALUES (2, 'Salve :D', NOW());
INSERT INTO posts (user_id, texto, tempo) VALUES (3, 'abiuriforitiaudusei', NOW());
