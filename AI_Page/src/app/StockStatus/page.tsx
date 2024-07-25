"use client";
import React from "react";
import { useRouter } from "next/navigation";
import StockStatus from "@/components/StockStatus";

const DynamicPricing = () => {
  const router = useRouter();
  return <StockStatus />;
};

export default DynamicPricing;
