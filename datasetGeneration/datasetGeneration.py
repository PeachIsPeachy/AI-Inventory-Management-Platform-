import numpy as np
import pandas as pd
from faker import Faker
import random

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
item_names = ["Apples", "Bananas", "Bread", "Milk", "Chicken", "Beef", "Eggs", "Cheese"]

for _ in range(2000):
    date = fake.date_this_year()

    temperature = round(random.uniform(10, 35), 1)  # Temperature between 10 and 35 degrees Celsius
    precipitation = round(random.uniform(0, 20), 1)  # Precipitation between 0 and 20 mm
    weather_condition = random.choice(weather_conditions)
    humidity = random.randint(20, 100)  # Humidity between 20% and 100%

    # Events (30% chance that there is an event)
    if random.random() < 0.3:
        event_location = fake.city()
        event_date = fake.date_this_year()
        event_type = random.choice(event_types)
    else:
        event_location = None
        event_date = None
        event_type = None

    # Promotions (40% chance that there is a promotion)
    if random.random() < 0.4:
        promotion_type = random.choice(promotion_types)
        promotion_start_date = fake.date_this_year()
        promotion_end_date = fake.date_between_dates(date_start=promotion_start_date)
        promotion_discount = round(random.uniform(5, 50), 1)  # Discount between 5% and 50%
        promotion_items = random.choice(item_names)
    else:
        promotion_type = None
        promotion_start_date = None
        promotion_end_date = None
        promotion_discount = None
        promotion_items = None

    receipt_id = fake.uuid4()
    item_sold = random.choice(item_names)
    quantity_sold = random.randint(1, 10)
    total_sales_amount = round(quantity_sold * random.uniform(1, 100), 2)  # Price between 1 and 100
    item_id = fake.uuid4()
    item_name = item_sold
    current_stock_level = random.randint(50, 500)
    reorder_point = random.randint(10, 100)
    lead_time = random.randint(1, 14)  # Lead time between 1 and 14 days
    expiration_date = fake.date_between_dates(date_start=date, date_end=fake.date_between(start_date=date, end_date="+1y"))

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
    data["Item_Name"].append(item_name)
    data["Current_Stock_Level"].append(current_stock_level)
    data["Reorder_Point"].append(reorder_point)
    data["Lead_Time"].append(lead_time)
    data["Expiration_Date"].append(expiration_date)

# Convert the dictionary to a DataFrame
df = pd.DataFrame(data)

# Save the DataFrame to a CSV file
df.to_csv('synthetic_sales_data.csv', index=False)

print("Synthetic dataset generated and saved to 'synthetic_sales_data.csv'")
