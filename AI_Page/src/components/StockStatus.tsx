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
            <table className="w-full bg-white rounded-lg shadow overflow-hidden">
              <thead className="bg-gray-200 text-black text-center">
                <tr>
                  <th className="py-3 px-4">Item</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Current Stock</th>
                  <th className="py-3 px-4">Recommended Stock</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-center">
                {[
                  ["Milk", "Low stock", "20", "35", "Environm"],
                  ["Chicken", "Low stock", "25", "36", "Reducing"],
                  ["Pastries", "Over stock", "34", "25", "Inventory"],
                  ["Beef", "Low stock", "45", "60", "Inventory"],
                  ["Yogurt", "Over stock", "60", "30", "Data"],
                  ["Avocado", "Low stock", "10", "30", "Search"],
                  ["Pork", "Low stock", "80", "100", "Revolutio"],
                ].map((row, index) => (
                  <tr key={index} className="border-t">
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className={`py-3 px-4 ${
                          i === 1
                            ? cell === "Low stock"
                              ? "text-green-500"
                              : cell === "Over stock"
                              ? "text-red-500"
                              : ""
                            : ""
                        }`}
                      >
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
                  Food Category Trend Insight
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
              <h2 className="text-xl font-bold mb-4 text-black">BigC</h2>
              <div className="flex items-center mb-4">
                <img
                  src="BigCLogo.jpg"
                  alt="Profile"
                  className="w-16 h-16 bg-gray-200 rounded-full"
                />
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

            <div>
              <div className="bg-white p-4 rounded-lg shadow mb-6 text-black">
                <h2 className="text-xl font-bold mb-4">
                  Inventory Alerts and Recommendations
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h3 className="font-bold">Low Stock Alerts</h3>
                    <p>- Milk</p>
                    <p>- Chicken</p>
                    <p>- Bread</p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h3 className="font-bold">High Stock Alerts</h3>
                    <p>- Yogurt</p>
                    <p>- Pastries</p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h3 className="font-bold">Restocking Recommendations</h3>
                    <p>- Order more Milk</p>
                    <p>- Order more Beef</p>
                  </div>
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
                  <p className="font-bold text-black">Milk</p>
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
