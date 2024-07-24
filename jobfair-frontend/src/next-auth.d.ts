import NextAuth from 'next-auth'

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            name: string,
            tel: string,
            role: string,
            email: string,
            emailVerified: string,
            image: string,
            createdAt: string,
            updatedAt: string,
            favouriteIds: string[],
            companyId: string,
        }
    }
}