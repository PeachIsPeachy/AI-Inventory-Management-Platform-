import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load the dataset
df = pd.read_csv('supermarket_inventory_data.csv')

# Display basic information about the dataset
print("Dataset Information:")
print(df.info())
print("\n")

# Display basic statistics of the dataset
print("Dataset Statistics:")
print(df.describe())
print("\n")

# Check for missing values
print("Missing Values:")
print(df.isnull().sum())
print("\n")

# Display the first few rows of the dataset
print("First Few Rows of the Dataset:")
print(df.head())
print("\n")

# Display column names to verify correct names
print("Column Names:")
print(df.columns)
print("\n")

# Assuming correct column names are 'Stock Level', 'Sales Velocity', 'Price'

# Distribution of stock levels
plt.figure(figsize=(10, 6))
sns.histplot(df['Stock Level'], kde=True)
plt.title('Distribution of Stock Level')
plt.xlabel('Stock Level')
plt.ylabel('Frequency')
plt.show()

# Distribution of sales velocity
plt.figure(figsize=(10, 6))
sns.histplot(df['Sales Velocity'], kde=True)
plt.title('Distribution of Sales Velocity')
plt.xlabel('Sales Velocity')
plt.ylabel('Frequency')
plt.show()

# Distribution of prices
plt.figure(figsize=(10, 6))
sns.histplot(df['Price'], kde=True)
plt.title('Distribution of Prices')
plt.xlabel('Price')
plt.ylabel('Frequency')
plt.show()

# Stock level by product
plt.figure(figsize=(12, 8))
sns.boxplot(data=df, x='Product Name', y='Stock Level')
plt.xticks(rotation=90)
plt.title('Stock Level by Product')
plt.xlabel('Product Name')
plt.ylabel('Stock Level')
plt.show()

# Sales velocity by product
plt.figure(figsize=(12, 8))
sns.boxplot(data=df, x='Product Name', y='Sales Velocity')
plt.xticks(rotation=90)
plt.title('Sales Velocity by Product')
plt.xlabel('Product Name')
plt.ylabel('Sales Velocity')
plt.show()

# Price by product
plt.figure(figsize=(12, 8))
sns.boxplot(data=df, x='Product Name', y='Price')
plt.xticks(rotation=90)
plt.title('Price by Product')
plt.xlabel('Product Name')
plt.ylabel('Price')
plt.show()

# Stock level by category
plt.figure(figsize=(12, 8))
sns.boxplot(data=df, x='Category', y='Stock Level')
plt.xticks(rotation=90)
plt.title('Stock Level by Category')
plt.xlabel('Category')
plt.ylabel('Stock Level')
plt.show()

# Sales velocity by category
plt.figure(figsize=(12, 8))
sns.boxplot(data=df, x='Category', y='Sales Velocity')
plt.xticks(rotation=90)
plt.title('Sales Velocity by Category')
plt.xlabel('Category')
plt.ylabel('Sales Velocity')
plt.show()

# Price by category
plt.figure(figsize=(12, 8))
sns.boxplot(data=df, x='Category', y='Price')
plt.xticks(rotation=90)
plt.title('Price by Category')
plt.xlabel('Category')
plt.ylabel('Price')
plt.show()

# Correlation matrix
plt.figure(figsize=(10, 8))
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
plt.title('Correlation Matrix')
plt.show()
