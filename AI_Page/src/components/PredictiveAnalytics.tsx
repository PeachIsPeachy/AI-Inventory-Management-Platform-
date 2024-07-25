"use client";
import React, { useState } from "react";

const PredictiveAnalytics = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Fresh Produce",
    "Dairy Products",
    "Meat and Seafood",
    "Deli",
    "Ready-to-Eat Meals",
    "Bakery Items",
    "Fresh Juices",
    "Eggs",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-black">
            Predictive Analytics
          </h1>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search for items..."
              className="py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button className="bg-green-600 text-white py-2 px-4 rounded-full">
              Export Data
            </button>
            <button className="bg-green-600 text-white py-2 px-4 rounded-full">
              Custom Reports
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-bold text-black">Total Stock Level</h2>
                <p className="text-black">Current Stock: 12,345 units (85%)</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-bold text-black">Forecast Accuracy</h2>
                <p className="text-black">Accuracy: 92%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-bold text-black">Alerts</h2>
                <p className="text-black">
                  2 Low Stock Alerts, 1 Overstock Alert
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mb-4 text-black">
                  Category Breakdown
                </h2>
                <select
                  className="border rounded-lg px-4 py-2 w-full md:w-auto text-gray-400"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 text-black">
                <div>
                  <h3 className="font-bold">Fresh Produce</h3>
                  <p>Fruits</p>
                  <p>Vegetables</p>
                </div>
                <div>
                  <h3 className="font-bold">Dairy Products</h3>
                  <p>Milk</p>
                  <p>Yogurt</p>
                  <p>Soft Cheeses</p>
                  <p>Cream</p>
                </div>
                <div>
                  <h3 className="font-bold">Meat and Seafood</h3>
                  <p>Beef</p>
                  <p>Pork</p>
                  <p>Chicken</p>
                  <p>Fish</p>
                  <p>Shellfish</p>
                </div>
                <div>
                  <h3 className="font-bold">Deli</h3>
                  <p>Prepared Meats</p>
                  <p>Cheese</p>
                  <p>Pre-made Salads and Sandwiches</p>
                </div>
                <div>
                  <h3 className="font-bold">Ready-to-Eat Meals</h3>
                  <p>Pre-packaged Meals</p>
                  <p>Fresh Pasta</p>
                  <p>Pre-made Salads</p>
                </div>
                <div>
                  <h3 className="font-bold">Bakery Items</h3>
                  <p>Bread</p>
                  <p>Pastries</p>
                  <p>Cakes</p>
                </div>
                <div>
                  <h3 className="font-bold">Fresh Juices</h3>
                  <p>Freshly Squeezed Juices</p>
                  <p>Smoothies</p>
                </div>
                <div>
                  <h3 className="font-bold">Eggs</h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4 text-black">
                Detailed Analytics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
                <div className="bg-gray-100 p-4 rounded-lg ">
                  <h3 className="font-bold">Category Demand Trends</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-bold">Stock Level Trends</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-bold">Sales Performance</h3>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-4 rounded-lg shadow mb-6 text-black">
              <h2 className="text-xl font-bold mb-4">
                Inventory Alerts and Recommendations
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="font-bold">Low Stock Alerts</h3>
                  <p>Milk</p>
                  <p>Chicken</p>
                  <p>Bread</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="font-bold">High Stock Alerts</h3>
                  <p>Yogurt</p>
                  <p>Pastries</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="font-bold">Restocking Recommendations</h3>
                  <p>Order more Milk</p>
                  <p>Order more Beef</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-between items-center mt-6">
          <input
            type="text"
            placeholder="Search for items..."
            className="py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          />
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white py-2 px-4 rounded-full">
              Export Data
            </button>
            <button className="bg-green-600 text-white py-2 px-4 rounded-full">
              Custom Reports
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;
