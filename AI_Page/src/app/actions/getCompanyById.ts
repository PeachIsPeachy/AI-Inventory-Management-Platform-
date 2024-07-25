import prisma from "@/libs/prismadb";

interface IParams {
  companyId?: string;
}

export default async function getCompanyById(
  params: IParams
) {
  try {
    const { companyId } = params;

    const company = await prisma.company.findUnique({
      where: {
        id: companyId,
      },
      include: {
        user: true
      }
    });

    if (!company) {
      return null;
    }

    return {
      ...company,
      createdAt: company.createdAt.toString(),
      updatedAt: company.updatedAt.toString(),
      user: {
        ...company.user,
        createdAt: company.user.createdAt.toString(),
        updatedAt: company.user.updatedAt.toString(),
        emailVerified: 
          company.user.emailVerified?.toString() || null,
      }
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
