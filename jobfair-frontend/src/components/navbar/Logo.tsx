'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter()

    return(
        // <Image 
        //     alt="Logo"
        //     className="hidden md:block cursor-pointer"
        //     height="100"
        //     width="100"
        //     src="/img/logo.png"
        // />
        <div className="text-2xl font-semibold text-blue-500 hidden md:block cursor-pointer" onClick={() => router.push('/')}>
            hireFest
        </div>
    )
}

export default Logo