import prisma from "@/libs/prismadb";

export interface CompaniesParams {
  userId?: string;
  interviewDate?: string;
  category?: string;
}

export default async function getCompanies(params: CompaniesParams = {}) {
  try {
    const {
      userId,
      interviewDate,
      category,
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (interviewDate) {
      query.interviewDate = interviewDate;
    }

    const Companies = await prisma.company.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeCompanies = Companies.map((company) => ({
      ...company,
      createdAt: company.createdAt.toISOString(),
      updatedAt: company.updatedAt.toISOString()
    }));

    return safeCompanies;
  } catch (error: any) {
    throw new Error(error);
  }
}
