"use client";
import React from "react";
import { useRouter } from "next/navigation";
import PredictiveAnalytics from "@/components/PredictiveAnalytics";

const DynamicPricing = () => {
  const router = useRouter();
  return <PredictiveAnalytics />;
};

export default PredictiveAnalytics;
