import pandas as pd
import numpy as np
import random
from faker import Faker
from datetime import datetime

# Initialize Faker and random seed
fake = Faker()
Faker.seed(0)
random.seed(0)

# Define categories and sub-categories
categories = {
    "Fresh Produce": ["Fruits", "Vegetables"],
    "Dairy Products": ["Milk", "Yogurt", "Soft Cheeses", "Cream"],
    "Meat and Seafood": ["Beef", "Pork", "Chicken", "Fish", "Shellfish"],
    "Bakery Items": ["Bread", "Pastries", "Cakes"],
    "Deli": ["Prepared Meats", "Cheese", "Pre-made Salads"],
    "Fresh Juices": ["Freshly Squeezed Juices", "Smoothies"],
    "Ready-to-Eat Meals": ["Pre-packaged Meals", "Fresh Pasta", "Pre-made Salads"],
    "Eggs": ["Size", "Grade"]
}

# Helper functions
def random_date(start, end):
    start_date = datetime.strptime(start, '%Y-%m-%d').date()
    end_date = datetime.strptime(end, '%Y-%m-%d').date()
    return fake.date_between(start_date=start_date, end_date=end_date)

def random_category():
    category = random.choice(list(categories.keys()))
    sub_category = random.choice(categories[category])
    return category, sub_category

def predict_likelihood(stock_level, sales_velocity):
    # Example criterion: If stock level is low and sales velocity is high
    return 'Yes' if stock_level < 20 and sales_velocity > 5.0 else 'No'

# Generate dataset
num_records = 10000
data = []

for i in range(num_records):
    product_id = f"PID{100000 + i}"
    product_name = fake.word().capitalize() + " " + fake.word().capitalize()
    category, sub_category = random_category()
    expiration_date = random_date("2024-01-01", "2024-12-31")
    stock_level = random.randint(1, 100)
    sales_velocity = random.uniform(0.5, 10.0)
    purchase_date = random_date("2023-01-01", "2023-12-31")
    price = round(random.uniform(1.0, 50.0), 2)
    shelf_life = (expiration_date - purchase_date).days
    product_weight_volume = round(random.uniform(0.1, 10.0), 2)
    
    if category == "Fresh Produce":
        ripeness_level = random.choice(["Unripe", "Ripe", "Overripe"])
        storage_temperature = random.uniform(0.0, 10.0)
        additional_features = [ripeness_level, storage_temperature]
    
    elif category == "Dairy Products":
        fat_content = random.uniform(0.0, 30.0)
        milk_type = random.choice(["Whole", "Skim", "2%"])
        additional_features = [fat_content, milk_type]
    
    elif category == "Meat and Seafood":
        cut_type = random.choice(["Steak", "Ground", "Fillet", "Whole"])
        seafood_type = random.choice(["Fish", "Shellfish", "N/A"])
        additional_features = [cut_type, seafood_type]
    
    elif category == "Bakery Items":
        type_of_bakery_item = sub_category
        filling_type = random.choice(["None", "Cream", "Custard", "Fruit"])
        additional_features = [type_of_bakery_item, filling_type]
    
    elif category == "Deli":
        preparation_type = random.choice(["Deli Meats", "Sausages", "Pre-made Salads"])
        cheese_type = random.choice(["Soft", "Semi-Soft", "Hard"])
        additional_features = [preparation_type, cheese_type]
    
    elif category == "Fresh Juices":
        juice_type = sub_category
        additives = random.choice(["None", "Sugar", "Preservatives"])
        additional_features = [juice_type, additives]
    
    elif category == "Ready-to-Eat Meals":
        meal_type = sub_category
        dietary_information = random.choice(["Gluten-Free", "Vegan", "None"])
        additional_features = [meal_type, dietary_information]
    
    elif category == "Eggs":
        size = random.choice(["Large", "Medium", "Small"])
        grade = random.choice(["A", "AA"])
        additional_features = [size, grade]
    
    # Determine if product is likely to be sold
    likelihood = predict_likelihood(stock_level, sales_velocity)
    
    data.append([product_id, product_name, category, sub_category, expiration_date, stock_level, sales_velocity, purchase_date, price, shelf_life, product_weight_volume] + additional_features + [likelihood])

# Create DataFrame and save to CSV
columns = [
    "Product ID", "Product Name", "Category", "Sub-Category", "Expiration Date",
    "Stock Level", "Sales Velocity", "Purchase Date", "Price", "Shelf Life",
    "Product Weight/Volume", "Additional Feature 1", "Additional Feature 2",
    "Likely to be Sold"
]

df = pd.DataFrame(data, columns=columns)
df.to_csv('supermarket_inventory_data_with_labels.csv', index=False)

print("CSV file with labels generated successfully!")
