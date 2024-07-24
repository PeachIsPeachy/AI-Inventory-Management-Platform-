'use client'

import Heading from "@/components/Heading";
import { SafeInterview, SafeJobPosition, SafeJobPositionWithoutInterview, SafeUser } from "@/types"
import { Container } from "@mui/material";
import axios from "axios";
import { error } from "console";
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import InterviewCard from "@/components/interviews/InterviewCard";
import OptionButton from "./OptionButton";
import  Router  from "next/navigation";
import useUpdateModal from "@/hooks/useUpdateModal";
import UpdateModal from "@/components/modals/UpdateModal";
import getJobPositions from "../actions/getJobPositions";

interface InterviewClientProps {
    interviews: SafeInterview[],
    currentUser?: SafeUser | null,
    jobposition:SafeJobPositionWithoutInterview[];
}

const InterviewClient: React.FC<InterviewClientProps> = ({
    interviews,
    currentUser,
    jobposition
}) => {

    const router = useRouter();

    const updateModal = useUpdateModal();

    const onCancel = useCallback((id: string) => {
        axios.delete(`/api/interviews/${id}`)
            .then(() => {
                toast.success("Interview cancelled");
                router.refresh();
            })
            .catch((error) => {
                if (!error?.response) {
                    console.log("no error")
                }
                toast.error(error?.message)
            })
    }, [router]);

    const [currentInterview,setCurrentInterview] = useState<SafeInterview>(interviews[0]);
    return (
        <div className=" w-full ">
            <Heading
                title="Interviews"
                subtitle={currentUser?.role === "ADMIN"? "This is all interview.\n as Admin you can see it all"  : "Which company that you have booked with"}
            />
            <div className="md px-0 ">
                {
                    interviews.map((interview: SafeInterview) => (
                        <div
                        className="flex-row  flex bg-white rounded-md
                        shadow-sm shadow-sky-100 hover:shadow-lg hover:shadow-blue-100 py-5 px-5 my-5
                        w-full lg:w-4/5 transiton-transform hover:-translate-y-1 duration-100
                        hover:ring-1 hover:ring-blue-100
                         "
                         key={interview.id}
                        >   
                            <InterviewCard
                                companyData={interview.company}
                                interviewData={interview}
                                jobPositionData={jobposition.find(jp => jp.id = interview.jobPositionId)}
                            />
                            <div className="flex flex-col justify-between w-1/5">
                            <OptionButton
                                label={"Update Booking"}
                                actionId={"0"}
                                interview={interview}
                                action="update"
                                onOpen={updateModal.onOpen}
                                onUpdate={(interview)=>setCurrentInterview(interview)}
                            />
                            <OptionButton
                                label={"Cancel Booking"}
                                onAction={onCancel}
                                actionId={interview.id}
                                action="delete"
                                interview={interview}
                            />
                            </div>
                        </div>
                    ))
                }
            </div>
            <UpdateModal currentUser={currentUser}  interview={currentInterview}/>
        </div>

    )
}

export default InterviewClient;