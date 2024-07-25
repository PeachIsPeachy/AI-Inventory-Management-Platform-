"use client";

import React, { useCallback, useState, useEffect } from "react";
import MenuItem from "./navbar/MenuItem"; // Assuming this is used somewhere in your project
import { useRouter } from "next/navigation";
import useLoginModal from "@/hooks/useLoginModal";
import UserMenu from "./navbar/UserMenu";

const LandingPage = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle the open state of some component, perhaps a menu
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  // Effect to redirect to the StockStatus page upon logging in
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/StockStatus");
    }
  }, [isLoggedIn, router]);

  // Simulated login function, this should be replaced with actual login logic
  const handleLogin = () => {
    loginModal.onOpen();
    toggleOpen();
    // Simulate a login action
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000); // Simulate login delay
  };

  return (
    <div className="w-full bg-green-50 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full py-28 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-green-700">
          Optimize Your Inventory
        </h1>
        <p className="mt-4 text-lg text-green-600">
          AI-driven solutions for zero food waste
        </p>
        <button
          className="mt-6 px-8 py-3 bg-green-600 text-white rounded-full"
          onClick={handleLogin}
        >
          Get Started
        </button>
        <img
          src="/images/DALLE_Grocery_Store_Banner.png"
          alt="Inventory Optimization"
          className="mt-10 rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full bg-white min-h-screen py-28 text-center flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-green-700">
          Maximize Efficiency
        </h2>
        <p className="mt-2 text-lg text-green-600">Reduce waste, save costs</p>
        <div className="flex justify-center mt-10">
          <img
            src="/images/DALLE_Grocery_Store_Banner.png"
            alt="Efficiency"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="w-full bg-green-50 min-h-screen py-28 flex flex-col items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-bold text-green-700">
            Predictive Analytics
          </h3>
          <p className="mt-2 text-green-600">
            Accurate stocking forecasts using AI.
          </p>
        </div>
        <div className="text-center mt-10">
          <h3 className="text-xl font-bold text-green-700">Real-time Alerts</h3>
          <p className="mt-2 text-green-600">
            Instant notifications for inventory issues.
          </p>
        </div>
        <div className="text-center mt-10">
          <h3 className="text-xl font-bold text-green-700">Dynamic Pricing</h3>
          <p className="mt-2 text-green-600">
            Adjust prices based on demand patterns.
          </p>
        </div>
      </div>

      <div className="w-full bg-white min-h-screen py-28 text-center flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-green-700">
          Boost Profitability
        </h2>
        <p className="mt-2 text-lg text-green-600">
          Innovative pricing strategies
        </p>
        <div className="flex justify-center mt-10">
          <div className="mr-10">
            <h3 className="text-xl font-bold text-green-700">
              Inventory Insights
            </h3>
            <p className="mt-2 text-green-600">
              Detailed analytics to optimize stock levels.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-700">
              Automated Restocking
            </h3>
            <p className="mt-2 text-green-600">
              Smart restocking to prevent shortages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
