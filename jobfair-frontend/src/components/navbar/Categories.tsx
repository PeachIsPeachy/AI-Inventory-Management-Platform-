"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
  GiOfficeChair,
  GiArchiveResearch,
  GiGreekTemple,
} from "react-icons/gi";
import { FaSkiing, FaChalkboardTeacher } from "react-icons/fa";
import { FaMoneyBill1Wave, FaPeopleGroup } from "react-icons/fa6";

import { IoStorefrontSharp } from "react-icons/io5";

import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import {
  MdOutlineVilla,
  MdDesignServices,
  MdBusinessCenter,
  MdEmojiPeople,
  MdOutlineSupportAgent,
  MdEngineering,
  MdHealthAndSafety,
  MdOutlineProductionQuantityLimits,
  MdFastfood,
  MdOutlineCurrencyExchange,
  MdOutlinePrecisionManufacturing,
  MdEmojiTransportation,
} from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";

import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { TiShoppingCart } from "react-icons/ti";

export const companyCategories = [
  {
    label: "Technology",
    icon: RiAdminFill,
    description: "Write something here :)",
  },
  {
    label: "Bank",
    icon: MdDesignServices,
    description: "Write something here :)",
  },
  {
    label: "Retail",
    icon: MdEmojiPeople,
    description: "Write something here :)",
  },
  {
    label: "Hospitality",
    icon: MdOutlineSupportAgent,
    description: "Write something here :)",
  },
  {
    label: "Entertainment",
    icon: FaChalkboardTeacher,
    description: "Write something here :)",
  },
  {
    label: "Construction",
    icon: MdEngineering,
    description: "Write something here :)",
  },
  {
    label: "Insurance",
    icon: FaMoneyBill1Wave,
    description: "Write something here :)",
  },
  {
    label: "Real Estate",
    icon: MdHealthAndSafety,
    description: "Write something here :)",
  },
  {
    label: "Creative",
    icon: GrTechnology,
    description: "Write something here :)",
  },
  {
    label: "Healthcare", // This category already existed, so it's not added again.
    icon: MdHealthAndSafety,
    description: "Write something here :)",
  },
  {
    label: "Education", // This category already existed, so it's not added again.
    icon: FaChalkboardTeacher,
    description: "Write something here :)",
  },
  {
    label: "Energy",
    icon: MdOutlinePrecisionManufacturing,
    description: "Write something here :)",
  },
  {
    label:  "Telecom",
    icon: MdEmojiTransportation,
    description: "Write something here :)",
  },
  {
    label: "Media",
    icon: GiBarn,
    description: "Write something here :)",
  },
  {
    label: "Startup",
    icon: IoDiamond,
    description: "Write something here :)",
  },
];

export const jobCategories = [
  
  {
    label: "On-Site",
    icon: MdEmojiTransportation,
    description: "Write something here :)",
  },
  {
    label: "Online",
    icon: GiBarn,
    description: "Write something here :)",
  },
  {
    label: "Hybrid",
    icon: IoDiamond,
    description: "Write something here :)",
  },
];



const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/" || pathname ==="/jobs" ;

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {pathname === "/jobs"
          ? jobCategories.map((item) => (
              <CategoryBox
                pathname={pathname}
                key={item.label}
                label={item.label}
                icon={item.icon}
                selected={category === item.label}
              />
            ))
          : companyCategories.map((item) => (
              <CategoryBox
                pathname={pathname}
                key={item.label}
                label={item.label}
                icon={item.icon}
                selected={category === item.label}
              />
            ))}
      </div>
    </Container>
  );
};

export default Categories;
