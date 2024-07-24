'use client'

import { BiSearch } from "react-icons/bi"
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
                    flex-row
                    items-center
                    justify-between
                "
        >
          <div
            className="
                        text-m
                        font-bold
                        px-6
                        hover:text-blue-500 cursor-pointer
                    "
          >
            <MenuItem
              label="Companies"
              onClick={() => router.push("/")}
            />
          </div>
          <div
            className="
                        
                        sm:block
                        text-m
                        font-bold
                        px-6
                        border-l-[1px]
                        flex-1
                        text-center
                        hover:text-blue-500 cursor-pointer
                    "
          >
            <MenuItem label="Jobs" onClick={() => router.push("/jobs")} />
          </div>
        </div>
      </div>
    );
}

export default Search