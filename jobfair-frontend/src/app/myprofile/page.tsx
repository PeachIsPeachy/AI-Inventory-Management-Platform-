import getCurrentUser from "@/app/actions/getCurrentUser";
import getInterview from "@/app/actions/getInterviews";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import InterviewClient from "./InterviewClient"
import ProfileCard from "@/components/ProfileCard";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import UpdateModal from "@/components/modals/UpdateModal";
import getJobPositions from "../actions/getJobPositions";
import CompanyInterview from "@/components/companies/CompanyInterview";

export default async function MyProfilePage() {

  const currentUser = await getCurrentUser();
  const interviews = await getInterview({ userId: currentUser?.id });
  const jobposition = await getJobPositions();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subtitle="Please login"
        />
      </ClientOnly>
    );
  }
  
  if (interviews.length === 0) {
    return (
      <Suspense fallback={<p>Loading...<LinearProgress /></p>}>
        <ClientOnly>
          <main className="flex flex-col lg:flex-row  justify-center items-center">
            <div className=" sm:ml-0 w-full lg:w-1/3 lg:mx-auto max-[1024px]:flex  items-center flex justify-center">
              <ProfileCard currentUser={currentUser} />
            </div>
            <div className="w-full lg:w-2/3">
              <EmptyState
                title="No interviews found"
                subtitle="Looks like you haven't booked any interviews."
              />
            </div>
          </main>
        </ClientOnly>
      </Suspense>
    );
  }
  return (
    <Suspense fallback={<p>Loading...<LinearProgress /></p>}>
      <ClientOnly >
        <main className="overflow-hidden flex flex-col lg:flex-row  justify-center items-center">
          <div className=" sm:ml-0 w-full lg:w-2/5 lg:mx-auto max-[1024px]:flex  items-center flex justify-center">
            <ProfileCard currentUser={currentUser} />
          </div>
          <div className="w-full lg:w-3/5">
            <div className="flex flex-col items-center justify-center gap-5 p-5 lg:flex-row lg:items-start lg:justify-center lg:gap-10">
              <InterviewClient interviews={interviews} jobposition={jobposition} />
            </div>
          </div>
        </main>
      </ClientOnly>
    </Suspense>
  );
}