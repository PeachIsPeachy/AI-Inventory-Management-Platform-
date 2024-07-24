import Container from "@/components/Container";
import CompanyCard from "@/components/companies/CompanyCard";
import EmptyState from "@/components/EmptyState";

import getCompanies, { CompaniesParams } from "@/app/actions/getCompanies";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/components/ClientOnly";
import getJobPositions, { JobPositionParams } from "./actions/getJobPositions";

interface HomeProps {
  searchParams: CompaniesParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const { category } = searchParams;
  const companiesParams = { category };
  const companies = await getCompanies(companiesParams);
  const jobPositions = await getJobPositions()
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
        <div
          className="
            pt-28
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-10
          "
        >
          {companies.map((company) => {
            return (
              <CompanyCard
                currentUser={currentUser}
                key={company.id}
                data={company}
                jobPositions={jobPositions}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
