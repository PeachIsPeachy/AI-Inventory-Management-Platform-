import prisma from "@/libs/prismadb";

interface IParams {
  jobPositionId?: string;
}

export default async function getCompanyById(
  params: IParams
) {
  try {
    const { jobPositionId } = params;

    const jobPosition = await prisma.jobPosition.findUnique({
      where: {
        id: jobPositionId,
      },
      include: {
        company: true,
        Interview: true,
      }
    });

    if (!jobPosition) {
      return null;
    }

    return {
      ...jobPosition,
      createdAt: jobPosition.createdAt.toString(),
      updatedAt: jobPosition.updatedAt.toString(),
      company: {
        ...jobPosition.company,
        createdAt: jobPosition.company.createdAt.toString(),
        updatedAt: jobPosition.company.updatedAt.toString(),
      },
      Interview: jobPosition.Interview.map((interview) => ({
        ...interview,
        createdAt: interview.createdAt.toString(),
        updatedAt: interview.updatedAt.toString(),
        interviewDate: interview.interviewDate.toString(),
      }))
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
