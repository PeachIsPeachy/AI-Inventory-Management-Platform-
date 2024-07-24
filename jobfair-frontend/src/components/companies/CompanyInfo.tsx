'use client';

import dynamic from "next/dynamic";
import { IconType } from "react-icons";

import useCountries from "@/hooks/useCountries";
import { SafeUser } from "@/types";

import Avatar from "../Avatar";
import CompanyCategory from "./CompanyCategory";

import Link from "next/link";

const Map = dynamic(() => import('../Map'), { 
  ssr: false 
});

interface CompanyInfoProps {
  user: SafeUser,
  description: string;
  category: {
    icon: IconType,
    label: string;
    description: string;
  } | undefined;
  website: string;
  tel: string;
  locationValue: string;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  user,
  description,
  category,
  website,
  tel,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng

  return ( 
    <div className="col-span-7 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Owned by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="
            flex 
            flex-row
            items-center
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>
            <Link href={`https://${website}`} className="text-blue-400 hover:underline">
              {website}
            </Link>
          </div>
          <div>
            <Link href={`tel:${tel}`} className="text-blue-400 hover:underline">
              {tel}
            </Link>
          </div>
        </div>
      </div>
      <hr />
      {category && (
        <CompanyCategory
          icon={category.icon} 
          label={category.label}
          description={category.description} 
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">
        {description}
      </div>
      <hr />
      <Map center={coordinates} />
    </div>
   );
}
 
export default CompanyInfo;