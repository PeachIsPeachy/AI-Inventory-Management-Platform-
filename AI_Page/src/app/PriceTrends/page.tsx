"use client";
import React from "react";
import { useRouter } from "next/navigation";
import PriceTrends from "@/components/PriceTrends";

const df = () => {
  const router = useRouter();
  return <PriceTrends />;
};

export default PriceTrends;
