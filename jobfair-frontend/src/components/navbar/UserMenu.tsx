'use client';

import { useCallback, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import useRentModal from "@/hooks/useRentModal";
import { SafeUser } from "@/types";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";
import useOnClickOutside from "@/hooks/useOnClickOutside";

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal()

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen()
    }

    rentModal.onOpen()
  }, [currentUser, loginModal])

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  const toggleButtonRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, (event) => {
    // Check if the click occurred outside of the modal and not on the toggle button
    if (!toggleButtonRef.current || !toggleButtonRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  });

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-2">
        {currentUser?.role === "USER" ? (
          <div 
          onClick={onRent}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Are you a business owner?
        </div>
        ) : ( 
          <div 
            onClick={() => router.push(`/companies/${currentUser?.companyId}`)}
            className="
              hidden
              md:block
              text-sm 
              font-semibold 
              py-3 
              px-4 
              rounded-full 
              hover:bg-neutral-100 
              transition 
              cursor-pointer
            "
          >
            My company
          </div>
      )}
        <div 
        onClick={toggleOpen}
        className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
          ref={toggleButtonRef}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
          ref={ref}
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  label="My profile"
                  onClick={() => router.push('/myprofile')}
                />
                <hr />
                <MenuItem
                  label="Sign out"
                  onClick={() => signOut()}
                />
              </>
            ) : (
              <>
                <MenuItem
                  label="Login"
                  onClick={() => {
                    loginModal.onOpen();
                    toggleOpen();
                  }}
                />
                <MenuItem
                  label="Sign up"
                  onClick={() => {
                    registerModal.onOpen();
                    toggleOpen();
                  }}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;