"use client"; // Ensure this is a Client Component

import React from "react";
import { useRouter } from "next/navigation";

const DynamicPricingDashboard = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">
            Dynamic Pricing Dashboard
          </h1>
          <div>
            <button className="bg-green-600 text-white py-2 px-6 rounded-full mr-2">
              Search Product
            </button>
            <button className="bg-green-600 text-white py-2 px-6 rounded-full">
              Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-black mb-4">
              Manual Price Adjustment Tool
            </h2>
            <table className="min-w-full bg-white border">
              <thead className="text-black">
                <tr>
                  <th className="py-2 px-4 border-b">Product Name</th>
                  <th className="py-2 px-4 border-b">Current Price</th>
                  <th className="py-2 px-4 border-b">Inventory</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody className="text-black text-center">
                {[
                  { name: "Product 1", price: "$10.00", inventory: 100 },
                  { name: "Product 2", price: "$20.00", inventory: 200 },
                  { name: "Product 3", price: "$30.00", inventory: 300 },
                ].map((product, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{product.name}</td>
                    <td className="py-2 px-4 border-b">{product.price}</td>
                    <td className="py-2 px-4 border-b">{product.inventory}</td>
                    <td className="py-2 px-4 border-b">
                      <input
                        type="text"
                        className="border rounded px-2 py-1"
                        placeholder="New Price"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-black mb-4">
              Time Period Selector
            </h2>
            <div className="flex space-x-4 mb-4 text-gray-400 ">
              <input
                type="date"
                className="border rounded-lg px-4 py-2 w-full"
                placeholder="YYYY-MM-DD"
              />
              <input
                type="date"
                className="border rounded-lg px-4 py-2 w-full"
                placeholder="YYYY-MM-DD"
              />
            </div>

            <h2 className="text-xl font-bold text-black mb-4">
              Price Change History
            </h2>
            <table className="min-w-full bg-white border mb-8">
              <thead>
                <tr className="text-black">
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Product</th>
                  <th className="py-2 px-4 border-b">Old Price</th>
                  <th className="py-2 px-4 border-b">New Price</th>
                </tr>
              </thead>
              <tbody className="text-black">
                {[
                  {
                    date: "2023-10-01",
                    product: "Product 1",
                    oldPrice: "$10.00",
                    newPrice: "$12.00",
                  },
                  {
                    date: "2023-10-02",
                    product: "Product 2",
                    oldPrice: "$20.00",
                    newPrice: "$22.00",
                  },
                  {
                    date: "2023-10-03",
                    product: "Product 3",
                    oldPrice: "$30.00",
                    newPrice: "$33.00",
                  },
                ].map((entry, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{entry.date}</td>
                    <td className="py-2 px-4 border-b">{entry.product}</td>
                    <td className="py-2 px-4 border-b">{entry.oldPrice}</td>
                    <td className="py-2 px-4 border-b">{entry.newPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 className="text-xl font-bold text-black mb-4">
              Chart of Price Change
            </h2>
            <div>
              {/* Placeholder for the chart */}
              <img
                src="/images/price_change_chart.png"
                alt="Chart of Price Change"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPricingDashboard;
