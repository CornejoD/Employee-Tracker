INSERT INTO department (dep_name)
VALUES  ("Leadership"),
        ("Fishing"),
        ("Gamer"),
        ("Development");

INSERT INTO role (title, salary, dep_id)
VALUES  ("Plumber", 1000, 1),
        ("Carpenter", 800, 1),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Justin", "Ferris", 1, NULL),
        ("Flor", "Wilkerson", 2, 1),

