"use client";

import getCurrentUser from "../actions/getCurrentUser";
import { Nunito } from "next/font/google";
import ClientOnly from "@/components/ClientOnly";
import ToasterProvider from "@/providers/ToasterProvider";
import Navbar from "@/components/navbar/Navbar";
import RentModal from "@/components/modals/RentModal";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";


const font = Nunito({
  subsets: ["latin"],
});



export default async function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
      <ClientOnly>
          <ToasterProvider/>
          <RentModal/>
          <LoginModal/>
          <RegisterModal/>
          <Navbar currentUser={currentUser}/> 
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}