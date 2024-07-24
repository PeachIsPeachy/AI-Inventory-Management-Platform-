'use client'

import { SafeInterview, SafeUser } from "@/types";
import Modal from "./Modal";
import { useCallback, useEffect, useState } from "react";
import useUpdateModal from "@/hooks/useUpdateModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Calendar  from "@/components/inputs/Calendar";
import { useRouter } from "next/navigation";

interface UpdateModalProps {
    currentUser?: SafeUser | null;
    interview: SafeInterview;
    onAction?: () => void;
}

interface DefaultValues{
    interviewDate: Date
}

const UpdateModal: React.FC<UpdateModalProps> = ({
    onAction,
    interview,
    currentUser,
}) => {
    const UpdateModal = useUpdateModal();
    const [isLoading, setIsLoading] = useState(false);
    
    const [date,setDate] = useState<Date>(new Date(interview.interviewDate));
    

    const {
        register,
        handleSubmit,
        setValue,
        formState: {
            errors,
        },
    } = useForm<DefaultValues>({
        defaultValues: {
            interviewDate: new Date(),
        },
    });

    const router = useRouter();
    const onSubmit:SubmitHandler<DefaultValues> = (data:DefaultValues) => {
        setIsLoading(true);
        const interviewDateStr = data.interviewDate;
        axios.post(`/api/interviews/${interview.id}`,{interviewId:interview.id,interviewDate:interviewDateStr})
            .then(() => {
                toast.success('Updated Succeeded');
                UpdateModal.onClose();
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.message);
            })
            .finally(() => {
                setIsLoading(false);
                router.refresh();
            })
    }

    const bodyContent = (
        <Calendar  value={date} onChange={(value)=>{setDate(value);setValue('interviewDate',value)}} />
      )
    return (
        <Modal
            disabled={isLoading}
            isOpen={UpdateModal.isOpen}
            title="Change date"
            actionLabel="Update"
            onClose={UpdateModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
    );
}

export default UpdateModal;