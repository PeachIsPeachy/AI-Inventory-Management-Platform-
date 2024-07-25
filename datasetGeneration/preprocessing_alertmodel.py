import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler, LabelEncoder
from scipy import stats

# Load data
df = pd.read_csv('supermarket_inventory_data.csv')

# Handle missing values
df.fillna({'Stock Level': df['Stock Level'].mean()}, inplace=True)

# Encode categorical variables
df['Category'] = df['Category'].astype('category').cat.codes
df['Sub-Category'] = df['Sub-Category'].astype('category').cat.codes

# Encode target variable
label_encoder = LabelEncoder()
df['Likely to be Sold'] = label_encoder.fit_transform(df['Likely to be Sold'])

# Feature scaling
scaler = MinMaxScaler()
df[['Price', 'Stock Level', 'Sales Velocity']] = scaler.fit_transform(df[['Price', 'Stock Level', 'Sales Velocity']])

# Feature engineering
df['Price_per_Weight'] = df['Price'] / df['Product Weight/Volume']

# Remove duplicates
df.drop_duplicates(inplace=True)

# Handle outliers
df = df[(np.abs(stats.zscore(df[['Price']])) < 3).all(axis=1)]

# Date processing
df['Expiration Date'] = pd.to_datetime(df['Expiration Date'])
df['Purchase Date'] = pd.to_datetime(df['Purchase Date'])
df['Days_to_Expiration'] = (df['Expiration Date'] - df['Purchase Date']).dt.days

# Save preprocessed data
df.to_csv('preprocessed_supermarket_inventory_data.csv', index=False)

print("Preprocessing completed and data saved!")
