use employees;



INSERT INTO department
    (name)
VALUES
    ('Culinary'),
    ('Executive Commitee'),
    ('Human Resources'),
    ('Front Desk');



INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Executive Chef', 100000, 1),
    ('Sous Chef', 70000, 1),
    ('General Manager', 150000, 2),
    ('Operations Director', 120000, 2),
    ('HR Director', 90000, 3),
    ('HR Rep', 50000, 3),
    ('Customer Service', 25000, 4),
    ('Bellman', 25000, 4);

    

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Carlos', 'Almanza', 1, NULL),
    ('Walter', 'Mercado', 2, 1),
    ('Sarahi', 'Lopez', 3, NULL),
    ('Dushan', 'Kovacevic', 4, 3),
    ('Axel', 'Coolman', 5, NULL),
    ('Yayo', 'Lorne', 6, 5),
    ('Jose', 'Ramon', 7, NULL),
    ('Teresa', 'Renteria', 8, 7);
