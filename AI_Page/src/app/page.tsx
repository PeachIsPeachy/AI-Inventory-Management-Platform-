import Container from "@/components/Container";
import CompanyCard from "@/components/companies/CompanyCard";
import EmptyState from "@/components/EmptyState";

import getCompanies, { CompaniesParams } from "@/app/actions/getCompanies";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/components/ClientOnly";
import getJobPositions from "./actions/getJobPositions";
import LandingPage from "../components/landingpage";

interface HomeProps {
  searchParams: CompaniesParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const { category } = searchParams;
  const companiesParams = { category };
  const companies = await getCompanies(companiesParams);
  const jobPositions = await getJobPositions();
  const currentUser = await getCurrentUser();

  if (companies.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <LandingPage/>
      </Container>
    </ClientOnly>
  );
};

export default Home;
