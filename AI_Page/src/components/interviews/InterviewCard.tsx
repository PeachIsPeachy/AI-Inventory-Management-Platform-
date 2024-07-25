'use client'

import { Calendar } from "react-date-range";
import { SafeCompany, SafeInterview, SafeJobPosition, SafeJobPositionWithoutInterview, SafeUser } from "@/types"
import Image from "next/image";

interface InterviewProps{
    companyData:SafeCompany;
    interviewData:SafeInterview;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null;
    jobPositionData?:SafeJobPositionWithoutInterview | null;
}

const InterviewCard:React.FC<InterviewProps> = ({
    companyData,
    interviewData,
    onAction,
    disabled,
    actionLabel,
    actionId = '',
    currentUser,
    jobPositionData
}) => {
    
    return (
        <div className="
        flex w-full items-center gap-20 text-center 
        ">
            <div className="w-[9em] h-[9em] relative mx-2 
           ">
                <Image  src={companyData.imageSrc} className="
                object-cover w-full h-full rounded-lg 
                " 
                layout="fill"
                alt="company photo"
                />
            </div>
            <div>
            <p className="font-bold text-2xl py-1" > {companyData.name} </p>
            
            <p className="text-sm text-slate-600 "> { "Booked Interview Date : " +   new Date(interviewData.interviewDate).toDateString()} </p>
            <p className="text-md text-slate-600 font-bold "> { jobPositionData?.title} </p>
            <div className="">
                <p className="text-sm text-slate-600 "> { "salary :"+ jobPositionData?.salary + " , " + jobPositionData?.type} </p> 
                <p className="text-sm text-slate-600 "> { "requirement :"+ jobPositionData?.experience} </p>
            </div>
            </div>
        </div>
    )
}


export default InterviewCard ; 