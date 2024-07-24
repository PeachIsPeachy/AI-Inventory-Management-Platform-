import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import ClientOnly from '@/components/ClientOnly'
import RegisterModal from '@/components/modals/RegisterModal'
import LoginModal from '@/components/modals/LoginModal'
import RentModal from '@/components/modals/RentModal'
import ToasterProvider from '../providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'
import getInterviews from './actions/getInterviews'

export const metadata: Metadata = { 
  title: 'hireFest',
  description: 'The offical hireFest website.',
}

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  const interview = await getInterviews({userId:currentUser?.id});
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <RentModal currentUser={currentUser}/>
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
