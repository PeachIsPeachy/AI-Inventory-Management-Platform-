'use client';

import Image from "next/image";

import useCountries from "@/hooks/useCountries";
import { SafeUser } from "@/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface CompanyHeadProps {
  name: string;
  locationValue: string;
  address: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null
}

const CompanyHead: React.FC<CompanyHeadProps> = ({
  name,
  locationValue,
  address,
  imageSrc,
  id,
  currentUser
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue)

  return ( 
    <>
      <Heading
        title={name}
        subtitle={`${address}, ${location?.region}, ${location?.label}`}
      />
      <div className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <Image
          src={imageSrc}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <HeartButton 
            companyId={id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </>
   );
}
 
export default CompanyHead;