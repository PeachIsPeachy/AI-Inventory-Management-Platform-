import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import toast from "react-hot-toast";

import { SafeUser } from "@/types";

import useLoginModal from "./useLoginModal";

interface IUseFavourite {
    companyId: string;
    currentUser?: SafeUser | null;
}

const useFavourite = ({
    companyId,
    currentUser
}: IUseFavourite) => {
    const router = useRouter()
    const loginModal = useLoginModal()

    const hasFavourited = useMemo(() => {
        const list = currentUser?.favouriteIds || []

        return list.includes(companyId)
    }, [currentUser, companyId])

    const toggleFavourite = useCallback(async (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        e.stopPropagation()

        if (!currentUser) {
            return loginModal.onOpen()
        }

        try {
            let request

            if (hasFavourited) {
                request = () => axios.delete(`/api/favourites/${companyId}`)
            } else {
                request = () => axios.post(`/api/favourites/${companyId}`)
            }

            await request()
            router.refresh()
            if (!hasFavourited) {
                toast.success('Successfully added to favourites.')
            } else {
                toast.success('Successfully removed from favourites.')
            }
        } catch (error) {
            toast.error('Something went wrong.')
        }
    }, [currentUser, hasFavourited, companyId, loginModal, router])

    return {
        hasFavourited,
        toggleFavourite
    }
}

export default useFavourite