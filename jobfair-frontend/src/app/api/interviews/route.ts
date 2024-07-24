import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

/**
 * @swagger
 * tags:
 *   name: Interviews
 *   description: The interview managing API
 */


export async function POST(
    request: Request
) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return NextResponse.error()
    }

    const body = await request.json()

    const {
        companyId,
        interviewDate,
        jobPositionId,
    } = body

    if(currentUser.role !== "ADMIN"){
        const allInterviewOfThisUser = await prisma.interview.findMany({
            where: {
                userId: currentUser.id
            }
        });
        if (allInterviewOfThisUser.length >= 3) {
            return NextResponse.json({error:"You are only allowed to schedule a maximum of three interviews."},{status:403});
        }
    }
    

    if (!companyId || !interviewDate) {
        return NextResponse.error()
    }

    // Time in Database is UTC time, so dont worry if the interviewDate posted seems wrong, its correct.
    const companyAndInterview = await prisma.company.update({
        where: {
            id: companyId
        },
        data: {
            interviews: {
                create: {
                    userId: currentUser.id,
                    interviewDate,
                    jobPositionId,
                }
            }
        }
    })

    return NextResponse.json(companyAndInterview)
}