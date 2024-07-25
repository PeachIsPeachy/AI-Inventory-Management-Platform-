"use client";
import React, { useState } from "react";

const Alert = () => {
  const tasks = [
    {
      date: "2024-07-25",
      title: "Beef",
      category: "Meat",
      amountOfProducts: 60,
      recommendation: "donate",
    },
    {
      date: "2024-07-25",
      title: "Apple",
      category: "Fruit",
      amountOfProducts: 80,
      recommendation: "discount 10%",
    },
    {
      date: "2024-07-25",
      title: "Milk",
      category: "Dairy",
      amountOfProducts: 49,
      recommendation: "flash sale",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-black">
          {/* Left Column - Real-time updates */}
          <div className="lg:col-span-1 bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Real-time updates</h2>
            <div className="space-y-4">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100"
                >
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      readOnly
                      className="form-checkbox h-5 w-5 text-green-600"
                    />
                    <div>
                      <h3 className="font-bold">{task.title}</h3>
                      <p className="text-gray-600">{task.category}</p>
                      <p
                        className={`${
                          task.amountOfProducts < 50
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {task.amountOfProducts < 50
                          ? "Low Stock"
                          : "Over Stock"}
                      </p>
                    </div>
                  </div>
                  <img
                    src={`https://via.placeholder.com/50`}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Task Details */}
          <div className="lg:col-span-3 bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Inventory analysis</h2>
              <button className="text-gray-600">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white text-center">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b">Date</th>
                    <th className="px-4 py-2 border-b">Item</th>
                    <th className="px-4 py-2 border-b">Category</th>
                    <th className="px-4 py-2 border-b">Amount of Products</th>
                    <th className="px-4 py-2 border-b">
                      Actionable Recommendation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 border-b">{task.date}</td>
                      <td className="px-4 py-2 border-b">{task.title}</td>
                      <td className="px-4 py-2 border-b">{task.category}</td>
                      <td className="px-4 py-2 border-b">
                        {task.amountOfProducts}
                      </td>
                      <td className="px-4 py-2 border-b">
                        {task.recommendation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
