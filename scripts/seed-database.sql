-- Create categories
INSERT INTO categories (id, name, slug, description, created_at, updated_at) VALUES
('cat_electronics', 'Electronics', 'electronics', 'Latest gadgets and electronic devices', NOW(), NOW()),
('cat_clothing', 'Clothing', 'clothing', 'Fashion and apparel for all occasions', NOW(), NOW()),
('cat_home_garden', 'Home & Garden', 'home-garden', 'Everything for your home and garden', NOW(), NOW()),
('cat_sports', 'Sports', 'sports', 'Sports equipment and fitness gear', NOW(), NOW()),
('cat_books', 'Books', 'books', 'Books and educational materials', NOW(), NOW());

-- Create sample products
INSERT INTO products (id, name, slug, description, price, compare_price, images, stock, category_id, created_at, updated_at) VALUES
('prod_headphones', 'Wireless Headphones', 'wireless-headphones', 'Premium wireless headphones with active noise cancellation and 30-hour battery life.', 99.99, 129.99, ARRAY['/placeholder.svg?height=500&width=500'], 25, 'cat_electronics', NOW(), NOW()),
('prod_smartwatch', 'Smart Watch', 'smart-watch', 'Advanced fitness tracking and smart notifications on your wrist.', 199.99, 249.99, ARRAY['/placeholder.svg?height=500&width=500'], 15, 'cat_electronics', NOW(), NOW()),
('prod_running_shoes', 'Running Shoes', 'running-shoes', 'Comfortable and durable running shoes for all terrains.', 79.99, 99.99, ARRAY['/placeholder.svg?height=500&width=500'], 30, 'cat_sports', NOW(), NOW()),
('prod_coffee_maker', 'Coffee Maker', 'coffee-maker', 'Programmable coffee maker with built-in grinder.', 149.99, NULL, ARRAY['/placeholder.svg?height=500&width=500'], 12, 'cat_home_garden', NOW(), NOW()),
('prod_laptop_backpack', 'Laptop Backpack', 'laptop-backpack', 'Durable laptop backpack with multiple compartments.', 49.99, 69.99, ARRAY['/placeholder.svg?height=500&width=500'], 20, 'cat_electronics', NOW(), NOW()),
('prod_yoga_mat', 'Yoga Mat', 'yoga-mat', 'Non-slip yoga mat perfect for all types of yoga practice.', 29.99, NULL, ARRAY['/placeholder.svg?height=500&width=500'], 40, 'cat_sports', NOW(), NOW());

-- Create sample users
INSERT INTO users (id, email, name, password, role, created_at, updated_at) VALUES
('user_admin', 'admin@shophub.com', 'Admin User', '$2b$10$hash', 'ADMIN', NOW(), NOW()),
('user_john', 'john@example.com', 'John Doe', '$2b$10$hash', 'CUSTOMER', NOW(), NOW()),
('user_jane', 'jane@example.com', 'Jane Smith', '$2b$10$hash', 'CUSTOMER', NOW(), NOW());

-- Create sample reviews
INSERT INTO reviews (id, rating, title, comment, user_id, product_id, created_at, updated_at) VALUES
('rev_1', 5, 'Excellent headphones!', 'Amazing sound quality and battery life. Highly recommended!', 'user_john', 'prod_headphones', NOW(), NOW()),
('rev_2', 4, 'Great smartwatch', 'Love the fitness tracking features. Battery could be better.', 'user_jane', 'prod_smartwatch', NOW(), NOW()),
('rev_3', 5, 'Perfect for running', 'Very comfortable and great grip. Best running shoes I have owned.', 'user_john', 'prod_running_shoes', NOW(), NOW());
