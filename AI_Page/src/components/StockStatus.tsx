"use client";
import React from "react";

const StockStatus = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-black">Inventory Status</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter item name"
              className="py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button className="absolute right-3 top-2 text-gray-500">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-600">
              <i className="fas fa-bell"></i>
            </button>
            <button className="text-gray-600">
              <i className="fas fa-clock"></i>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="flex space-x-4 mb-4">
              <button className="bg-green-600 text-white py-2 px-4 rounded-full">
                Restock Now
              </button>
              <button className="bg-green-600 text-white py-2 px-4 rounded-full">
                Stock
              </button>
              <button className="bg-green-600 text-white py-2 px-4 rounded-full">
                Alerts
              </button>
              <button className="bg-green-600 text-white py-2 px-4 rounded-full">
                Analytics
              </button>
            </div>

            <table className="w-full bg-white rounded-lg shadow overflow-hidden">
              <thead className="bg-gray-200 text-black">
                <tr>
                  <th className="py-3 px-4 text-left">Expiry Date</th>
                  <th className="py-3 px-4 text-left">Expiry Alert</th>
                  <th className="py-3 px-4 text-left">Expiry Alert</th>
                  <th className="py-3 px-4 text-left">Expiry Alert</th>
                  <th className="py-3 px-4 text-left">Expiry Alert</th>
                  <th className="py-3 px-4 text-left">Expiry Alert</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  [
                    "Zero Waste Strategy",
                    "Low",
                    "Sustainab",
                    "Cost",
                    "Environm",
                    "AI",
                  ],
                  [
                    "Real-time Alerts",
                    "Predictive",
                    "Dynamic",
                    "Efficient",
                    "Reducing",
                    "Insights",
                  ],
                  [
                    "Stock Optimization",
                    "Inventory",
                    "Waste",
                    "Stocking",
                    "Inventory",
                    "Smart",
                  ],
                  [
                    "Zero Food Waste Solutions",
                    "Inventory",
                    "Real-time",
                    "Stock",
                    "Inventory",
                    "Inventory",
                  ],
                  [
                    "Data-driven Insights",
                    "26",
                    "Analytics",
                    "28",
                    "Data",
                    "Perform",
                  ],
                  [
                    "Search Functionality",
                    "20",
                    "Content",
                    "Keyword",
                    "Search",
                    "Search",
                  ],
                  [
                    "Innovative Solutions",
                    "Cutting-",
                    "Advanced",
                    "Smart",
                    "Revolutio",
                    "Efficient",
                  ],
                ].map((row, index) => (
                  <tr key={index} className="border-t">
                    {row.map((cell, i) => (
                      <td key={i} className="py-3 px-4">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4 text-black">
                  Smart Insights
                </h2>
                <div className="h-48 bg-gray-100 rounded-lg"></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4 text-black">
                  Progress Overview
                </h2>
                <div className="h-48 bg-gray-100 rounded-lg"></div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-bold mb-4 text-black">
                Business Profile
              </h2>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div className="ml-4">
                  <p className="text-gray-700 font-semibold">
                    Inventory Manager
                  </p>
                  <p className="text-gray-500">manager@wastezero.com</p>
                </div>
              </div>
              <button className="bg-green-600 text-white py-2 px-4 rounded-full">
                AI Inventory Management
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-bold mb-4 text-black">
                Stock Analysis
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-black">
                      Stock Forecasting
                    </h3>
                    <p className="text-gray-600">Real-time Monitoring</p>
                  </div>
                  <span className="text-green-600 font-bold">Low</span>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-black">Product</h3>
                    <p className="text-gray-600">Demand Prediction</p>
                  </div>
                  <span className="text-gray-600">Sales</span>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-black">Inventory</h3>
                    <p className="text-gray-600">Waste Reduction</p>
                  </div>
                  <span className="text-gray-600">Efficient</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4 text-black">
                Upcoming Alerts
              </h2>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                <div className="ml-4">
                  <p className="font-bold text-black">Low Stock Alert</p>
                  <p className="text-gray-600">Tomorrow, 10:00 AM</p>
                  <p className="text-red-600">Urgent Restock Needed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockStatus;
