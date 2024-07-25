"use client";

import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
import "./search.css";

const Search = () => {
  const router = useRouter();
  return (
    <div
      className="
                border-[1px]
                w-full
                md:w-auto
                py-2
                rounded-full
                shadow-sm
                hover:shadow-md
                transition
                cursor-pointer
            "
    >
      <div
        className="
                    flex
                    items-center
                    justify-between
                "
      >
        <div
          className="
                        text-m
                        font-bold
                        px-6
                        hover:text-green-600 cursor-pointer
                    "
        >
          <MenuItem
            label="Stock Status"
            onClick={() => router.push("/StockStatus")}
          />
        </div>
        <div
          className="
                        text-m
                        font-bold
                        px-6
                        border-l-[1px]
                        hover:text-green-600 cursor-pointer
                    "
        >
          <MenuItem
            label="Price Trends"
            onClick={() => router.push("/PriceTrends")}
          />
        </div>
        <div
          className="
                        text-m
                        font-bold
                        px-6
                        border-l-[1px]
                        hover:text-green-600 cursor-pointer
                    "
        >
          <MenuItem
            label="Predictive Analytics"
            onClick={() => router.push("/PredictiveAnalytics")}
          />
        </div>
        <div
          className="
                        text-m
                        font-bold
                        px-6
                        border-l-[1px]
                        hover:text-green-600 cursor-pointer
                    "
        >
          <MenuItem
            label="Dynamics Pricing"
            onClick={() => router.push("/DynamicPricing")}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
