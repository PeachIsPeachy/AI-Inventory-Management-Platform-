"use client";
import React, { useState } from "react";

const PriceTrends= () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search for tasks"
              className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white py-2 px-4 rounded-full">
              Create task
            </button>
            <button className="bg-green-600 text-white py-2 px-4 rounded-full">
              View
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Real-time updates */}
          <div className="lg:col-span-1 bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Real-time updates</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Inventory analysis",
                  description: "New inventory alert",
                  completed: false,
                },
                {
                  title: "Inventory analysis",
                  description: "Inventory task completed",
                  completed: true,
                },
                {
                  title: "Stock management ideas",
                  description: "Inventory task completed",
                  completed: true,
                },
                {
                  title: "Price optimization",
                  description: "Inventory task on hold",
                  completed: true,
                },
                {
                  title: "Lorem ipsum",
                  description: "Inventory task completed",
                  completed: true,
                },
              ].map((task, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100"
                >
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      readOnly
                      className="form-checkbox h-5 w-5 text-green-600"
                    />
                    <div>
                      <h3
                        className={`font-bold ${
                          task.completed ? "line-through" : ""
                        }`}
                      >
                        {task.title}
                      </h3>
                      <p className="text-gray-600">{task.description}</p>
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
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <i className="fas fa-user text-gray-600"></i>
                <p className="font-bold">Assignee details</p>
                <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full">
                  Myself
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-clock text-gray-600"></i>
                <p className="font-bold">Due date</p>
                <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full">
                  Today's task
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-box text-gray-600"></i>
                <p className="font-bold">Inventory</p>
                <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full">
                  Confidential
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-exclamation-triangle text-gray-600"></i>
                <p className="font-bold">Urgency level</p>
                <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full">
                  Moderate
                </span>
              </div>

              {/* Attached Files */}
              <div className="mt-6">
                <h3 className="font-bold">Attached files</h3>
                <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                  <p className="text-gray-600">No attachments found</p>
                  <button className="bg-green-600 text-white py-2 px-4 rounded-full">
                    Upload
                  </button>
                </div>
              </div>

              {/* Related Links */}
              <div className="mt-6">
                <h3 className="font-bold">Related links</h3>
                <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                  <p className="text-gray-600">No links available</p>
                  <button className="bg-green-600 text-white py-2 px-4 rounded-full">
                    Include
                  </button>
                </div>
              </div>
            </div>

            {/* Task Actions */}
            <div className="flex justify-between mt-6">
              <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full">
                Move task to archive
              </button>
              <button className="bg-red-600 text-white py-2 px-4 rounded-full">
                Remove task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTrends;
