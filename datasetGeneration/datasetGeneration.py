import numpy as np
import pandas as pd
from faker import Faker
import random
from datetime import datetime, timedelta

fake = Faker()

# Initialize lists to store the data
data = {
    "Date": [],
    "Temperature": [],
    "Precipitation": [],
    "Weather_Conditions": [],
    "Humidity": [],
    "Event_Location": [],
    "Event_Date": [],
    "Event_Type": [],
    "Promotion_Type": [],
    "Promotion_Start_Date": [],
    "Promotion_End_Date": [],
    "Promotion_Discount": [],
    "Promotion_Items": [],
    "Receipt_ID": [],
    "Item_Sold": [],
    "Quantity_Sold": [],
    "Total_Sales_Amount": [],
    "Item_ID": [],
    "Item_Name": [],
    "Current_Stock_Level": [],
    "Reorder_Point": [],
    "Lead_Time": [],
    "Expiration_Date": []
}

weather_conditions = ["Sunny", "Cloudy", "Rainy", "Snowy"]
event_types = ["Concert", "Festival", "Sports", "Parade"]
promotion_types = ["Discount", "Buy-One-Get-One", "Flash Sale", "Seasonal Offer"]

item_categories = {
    "Fresh Produce": ["Apples", "Bananas", "Oranges", "Tomatoes", "Lettuce", "Carrots", "Broccoli"],
    "Dairy Products": ["Milk", "Yogurt", "Cottage Cheese", "Ricotta", "Cream"],
    "Meat and Seafood": ["Beef", "Pork", "Chicken", "Salmon", "Shrimp"],
    "Bakery Items": ["Bread", "Croissants", "Muffins", "Cupcakes"],
    "Deli": ["Ham", "Turkey", "Salami", "Cheddar Cheese", "Swiss Cheese"],
    "Fresh Juices": ["Orange Juice", "Apple Juice", "Carrot Juice", "Green Smoothie"],
    "Ready-to-Eat Meals": ["Pasta Salad", "Chicken Caesar Salad", "Sushi Rolls", "Sandwich Platter"],
    "Eggs": ["Large Eggs", "Organic Eggs", "Free-Range Eggs"]
}

all_items = [item for category in item_categories.values() for item in category]

# Set the date range
end_date = datetime.now().date()
start_date = end_date - timedelta(days=365)  # One year of data

# Generate promotions
promotions = []
for _ in range(20):  # Let's say we have 20 promotions throughout the year
    promo_type = random.choice(promotion_types)
    promo_start = fake.date_between(start_date=start_date, end_date=end_date)
    promo_end = promo_start + timedelta(days=random.randint(3, 14))
    promo_discount = random.randint(5, 50)
    promo_items = random.sample(all_items, random.randint(1, 5))  # 1 to 5 items per promotion
    promotions.append({
        "type": promo_type,
        "start": promo_start,
        "end": promo_end,
        "discount": promo_discount,
        "items": promo_items
    })

for _ in range(5000):  # Increased to 5000 for more data points
    date = fake.date_between(start_date=start_date, end_date=end_date)

    temperature = round(random.uniform(10, 35), 1)
    precipitation = round(random.uniform(0, 20), 1)
    weather_condition = random.choice(weather_conditions)
    humidity = random.randint(20, 100)

    # Events (30% chance that there is an event)
    if random.random() < 0.3:
        event_location = fake.city()
        event_date = fake.date_between(start_date=date, end_date=date + timedelta(days=30))
        event_type = random.choice(event_types)
    else:
        event_location = event_date = event_type = None

    # Check if there's an active promotion
    active_promos = [p for p in promotions if p["start"] <= date <= p["end"]]
    if active_promos:
        promo = random.choice(active_promos)
        promotion_type = promo["type"]
        promotion_start_date = promo["start"]
        promotion_end_date = promo["end"]
        promotion_discount = promo["discount"]
        promotion_items = ", ".join(promo["items"])
    else:
        promotion_type = promotion_start_date = promotion_end_date = promotion_discount = promotion_items = None

    # Generate receipt
    receipt_id = fake.uuid4()
    items_in_receipt = random.randint(1, 10)
    receipt_total = 0

    for _ in range(items_in_receipt):
        item_sold = random.choice(all_items)
        quantity_sold = random.randint(1, 5)
        
        # Determine the price range based on the item category
        for category, items in item_categories.items():
            if item_sold in items:
                if category in ["Fresh Produce", "Eggs"]:
                    price_range = (1, 10)
                elif category in ["Dairy Products", "Bakery Items", "Fresh Juices"]:
                    price_range = (2, 15)
                elif category in ["Meat and Seafood", "Deli", "Ready-to-Eat Meals"]:
                    price_range = (5, 30)
                break
        
        item_price = random.randint(*price_range)
        
        # Apply promotion discount if applicable
        if promotion_items and item_sold in promotion_items.split(", "):
            item_price = int(item_price * (1 - promotion_discount/100))
        
        total_sales_amount = quantity_sold * item_price
        receipt_total += total_sales_amount
        
        item_id = fake.uuid4()
        current_stock_level = random.randint(50, 500)
        reorder_point = random.randint(10, 100)
        lead_time = random.randint(1, 14)
        
        # Set expiration date based on item category
        if category in ["Fresh Produce", "Dairy Products", "Meat and Seafood", "Fresh Juices"]:
            expiration_date = date + timedelta(days=random.randint(3, 14))
        elif category in ["Bakery Items", "Deli", "Ready-to-Eat Meals"]:
            expiration_date = date + timedelta(days=random.randint(1, 7))
        else:  # Eggs
            expiration_date = date + timedelta(days=random.randint(21, 35))

        data["Date"].append(date)
        data["Temperature"].append(temperature)
        data["Precipitation"].append(precipitation)
        data["Weather_Conditions"].append(weather_condition)
        data["Humidity"].append(humidity)
        data["Event_Location"].append(event_location)
        data["Event_Date"].append(event_date)
        data["Event_Type"].append(event_type)
        data["Promotion_Type"].append(promotion_type)
        data["Promotion_Start_Date"].append(promotion_start_date)
        data["Promotion_End_Date"].append(promotion_end_date)
        data["Promotion_Discount"].append(promotion_discount)
        data["Promotion_Items"].append(promotion_items)
        data["Receipt_ID"].append(receipt_id)
        data["Item_Sold"].append(item_sold)
        data["Quantity_Sold"].append(quantity_sold)
        data["Total_Sales_Amount"].append(total_sales_amount)
        data["Item_ID"].append(item_id)
        data["Item_Name"].append(item_sold)
        data["Current_Stock_Level"].append(current_stock_level)
        data["Reorder_Point"].append(reorder_point)
        data["Lead_Time"].append(lead_time)
        data["Expiration_Date"].append(expiration_date)

# Convert the dictionary to a DataFrame
df = pd.DataFrame(data)

# Save the DataFrame to a CSV file
df.to_csv('synthetic_sales_data.csv', index=False)

print("Synthetic dataset generated and saved to 'synthetic_sales_data.csv'")