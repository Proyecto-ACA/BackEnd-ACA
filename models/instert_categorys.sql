INSERT INTO test_categorys (category, name) VALUES (1, 'Falso o Verdadero');
INSERT INTO test_categorys (category, name) VALUES (2, 'Opcion Multiple');

INSERT INTO test_difficultys (difficulty, name) VALUES (1, 'Facil');
INSERT INTO test_difficultys (difficulty, name) VALUES (2, 'Normal');

INSERT INTO lesson_levels (level, name) VALUES (1, 'facil');
INSERT INTO lesson_levels (level, name) VALUES (2, 'normal');
INSERT INTO lesson_levels (level, name) VALUES (3, 'dificil');
INSERT INTO lesson_levels (level, name) VALUES (4, 'infierno');

INSERT INTO lessons (name, image, description, level_id, category_id)
    VALUES ('leccion 1 - 23', 'https://drive.google.com/file/d/1ceoOJwI5YEKwAUSZPDcffjL4NVyajIz8/view?usp=sharing','tu primera leccion ;v',1,1);

INSERT INTO lesson_x_sign (lesson_id, sign_id, type) VALUES (1, 1, 1);
INSERT INTO lesson_x_sign (lesson_id, sign_id, type) VALUES (1, 2, 1);
INSERT INTO lesson_x_sign (lesson_id, sign_id, type) VALUES (1, 3, 1);
INSERT INTO lesson_x_sign (lesson_id, sign_id, type) VALUES (1, 4, 1);
INSERT INTO lesson_x_sign (lesson_id, sign_id, type) VALUES (1, 5, 2);