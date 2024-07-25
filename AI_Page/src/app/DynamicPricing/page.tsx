"use client";
import React from "react";
import { useRouter } from "next/navigation";
import DynamicPricingDashboard from "@/components/DynamicPricingDashboard";

const DynamicPricing = () => {
  const router = useRouter();
  return <DynamicPricingDashboard />;
};

export default DynamicPricing;
