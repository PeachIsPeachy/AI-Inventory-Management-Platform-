'use client';

import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { IconContext } from "react-icons";

import useFavorite from "@/hooks/useFavourite";
import { SafeUser } from "@/types";

interface HeartButtonProps {
  companyId: string
  currentUser?: SafeUser | null
}

const HeartButton: React.FC<HeartButtonProps> = ({ 
  companyId,
  currentUser
}) => {
  const { hasFavourited, toggleFavourite } = useFavorite({
    companyId,
    currentUser
  });

  return (
    <div 
      onClick={toggleFavourite}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
    <IconContext.Provider value={{ color: 'white'}}>
      <IoHeartOutline
        size={28}
        className="
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
    </IconContext.Provider>
      <IoHeart
        size={24}
        className={
          hasFavourited ? 'fill-rose-500' : 'fill-black opacity-40'
        }
      />
    </div>
   );
}
 
export default HeartButton;