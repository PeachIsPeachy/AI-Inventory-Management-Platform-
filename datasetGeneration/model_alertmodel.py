import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline

# Load the preprocessed data
df = pd.read_csv('preprocessed_supermarket_inventory_data.csv')

# Define features and target variable
X = df.drop(columns=['Product ID', 'Product Name', 'Likely to be Sold'])
y = df['Likely to be Sold']

# Convert non-numeric columns to numeric if needed, such as dates
X['Expiration Date'] = pd.to_datetime(X['Expiration Date']).astype('int64') / 1e9  # Convert to seconds since epoch
X['Purchase Date'] = pd.to_datetime(X['Purchase Date']).astype('int64') / 1e9  # Convert to seconds since epoch

# Identify numeric columns for scaling
numeric_features = ['Price', 'Stock Level', 'Sales Velocity', 'Price_per_Weight', 'Days_to_Expiration', 'Expiration Date', 'Purchase Date']
X_numeric = X[numeric_features]

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X_numeric, y, test_size=0.2, random_state=0)

# Initialize the Gradient Boosting Classifier
model = GradientBoostingClassifier(random_state=0)

# Create a pipeline that includes scaling and the model
pipeline = make_pipeline(StandardScaler(), model)

# Define parameter grid for GridSearchCV
param_grid = {
    'gradientboostingclassifier__n_estimators': [100, 200],
    'gradientboostingclassifier__learning_rate': [0.01, 0.1, 0.2],
    'gradientboostingclassifier__max_depth': [3, 5, 7]
}

# Perform GridSearchCV to find the best parameters
grid_search = GridSearchCV(pipeline, param_grid, cv=5, n_jobs=-1)
grid_search.fit(X_train, y_train)

# Print best parameters from grid search
print(f"Best parameters: {grid_search.best_params_}")

# Evaluate the best model from grid search
best_model = grid_search.best_estimator_
y_pred = best_model.predict(X_test)

# Evaluate the model
conf_matrix = confusion_matrix(y_test, y_pred)
class_report = classification_report(y_test, y_pred)

print("Confusion Matrix:")
print(conf_matrix)
print("Classification Report:")
print(class_report)
