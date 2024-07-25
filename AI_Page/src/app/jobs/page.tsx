import Container from "../../components/Container";
import JobPositionCard from "@/components/jobPositions/JobPositionCard";
import EmptyState from "../../components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "../../components/ClientOnly";
import getJobPositions, { JobPositionParams } from "@/app/actions/getJobPositions";
import getInterviews from "../actions/getInterviews";
import DynamicPricingDashboard from "@/components/DynamicPricingDashboard";


interface JobsProp {
  searchParams: JobPositionParams;
}

const JobsPage = async ({ searchParams }: JobsProp) => {
  const { category } = searchParams;
  const jobPositionParams = { category };
  const jobPositions = await getJobPositions(jobPositionParams);
  const currentUser = await getCurrentUser();
  const interviews = await getInterviews()

  if (jobPositions.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
         <DynamicPricingDashboard />;
      </Container>
    </ClientOnly>
  );
};

export default JobsPage;