"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Alert from "@/components/Alert";

const df = () => {
  const router = useRouter();
  return <Alert />;
};

export default Alert;
