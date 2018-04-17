CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(5,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Wireless Optical Mouse", "Computer Accessories", 7.99, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Classic Aviator Sunglasses", "Fashion Accessories", 16.99, 53);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Universal Remote Control", "Electronics", 28.00, 140);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Camping Lantern Flashlights 2 Pack", "Outdoor", 10.99, 64);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Bluetooth Headphones", "Electronics", 62.99, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Cheese Board and Cutlery Set", "Kitchenware", 49.99, 11);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Aluminium Nonstick 3-Piece Frying Pan Set", "Kitchenware", 19.54, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("iPad Air Smart Case", "Tech Cases", 10.99, 106);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Tea Tree Body Wash", "Beauty", 10.00, 87);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Flavored Sparkling Mineral Water", "Grocery", 13.58, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Twin Air Mattress", "Outdoor", 68.99, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Wide Brim Sun Hat", "Fashion Accessories", 12.99, 71);

SELECT*FROM products;