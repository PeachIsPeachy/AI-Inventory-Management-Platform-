import prisma from "@/libs/prismadb"

interface ReviewParams{
    userId?:string;
    companyId?:string;
}

export default async function getReviews(params: ReviewParams) {
    try {
        const {
            userId,
            companyId,
        } = params;

        const query :any ={};

        if(companyId){
            query.companyId = companyId;
        }
        if(userId){
            query.userId = userId;
        }

        const reviews = await prisma.review.findMany({
            where: query,
            include:{
                user: true,
                company: true,
            },
            orderBy:{
                createdAt: "desc"
            }
        })

        const safeReviews = reviews.map((review) => ({
                id: review.id,
                userId: review.userId,
                companyId: review.companyId,
                rating: review.rating,
                comment: review.comment,
                createdAt: review.createdAt.toISOString(),
                updatedAt: review.updatedAt.toISOString(),
                user:{
                    ...review.user,
                    createdAt: review.user.createdAt.toISOString(),
                    updatedAt: review.user.updatedAt.toISOString(),
                    emailVerified: review.user.emailVerified?.toISOString() || null,
                },
                company:{
                    ...review.company,
                    createdAt: review.company.createdAt.toISOString(),
                    updatedAt: review.company.updatedAt.toISOString(),
                },
            })
        );

        return safeReviews;
    } catch (error : any){
        throw new Error(error);
    }
}