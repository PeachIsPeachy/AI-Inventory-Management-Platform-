import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { parse } from "path";

interface IParams {
    interviewId?:string
}

/**
 * @swagger
 * tags:
 *   name: Interviews
 *   description: The interview managing API
 */

/**
 * @swagger
 * /api/interviews:
 *   post:
 *     summary: Schedule an interview
 *     tags: [Interviews]
 *     description: Schedules an interview for the specified company.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               companyId:
 *                 type: string
 *                 description: The ID of the company for which the interview is scheduled.
 *               interviewDate:
 *                 type: string
 *                 format: date-time
 *                 description: The date and time of the interview.
 *               jobPositionId:
 *                 type: string
 *                 description: The ID of the job position for which the interview is scheduled.
 *     responses:
 *       '200':
 *         description: Successfully scheduled interview.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Interview'
 *       '400':
 *         description: Bad request, invalid input or missing required fields.
 *       '401':
 *         description: Unauthorized, user not authenticated.
 *       '403':
 *         description: Forbidden, user not allowed to schedule more interviews.
 *       '500':
 *         description: Internal server error.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Interview:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the interview.
 *         userId:
 *           type: string
 *           description: The ID of the user associated with the interview.
 *         companyId:
 *           type: string
 *           description: The ID of the company associated with the interview.
 *         interviewDate:
 *           type: string
 *           format: date-time
 *           description: The date and time of the interview.
 *         jobPositionId:
 *           type: string
 *           description: The ID of the job position associated with the interview.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the interview was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the interview was last updated.
 *       required:
 *         - userId
 *         - companyId
 *         - interviewDate
 *         - jobPositionId
 */

/**
 * @swagger
 * /api/interviews/[interviewId]:
 *   put:
 *     summary: Update interview date
 *     tags: [Interviews]
 *     description: Updates the date of the specified interview.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               interviewId:
 *                 type: string
 *                 description: The ID of the interview to update.
 *               interviewDate:
 *                 type: string
 *                 format: date-time
 *                 description: The new date and time for the interview.
 *     responses:
 *       '200':
 *         description: Successfully updated interview date.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Interview'
 *       '400':
 *         description: Bad request, invalid input or missing required fields.
 *       '401':
 *         description: Unauthorized, user not authenticated.
 *       '500':
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/interviews/[interviewId]:
 *   delete:
 *     summary: Delete an interview
 *     tags: [Interviews]
 *     description: Deletes the specified interview.
 *     parameters:
 *       - in: path
 *         name: interviewId
 *         schema:
 *           type: string
 *         description: The ID of the interview to delete.
 *     responses:
 *       '200':
 *         description: Successfully deleted interview.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Interview'
 *       '400':
 *         description: Bad request, invalid input or missing required fields.
 *       '401':
 *         description: Unauthorized, user not authenticated.
 *       '500':
 *         description: Internal server error.
 */

export async function DELETE(
    request:Request,
    {params}:{params:IParams}
){
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return NextResponse.error();
    }
    
    const {interviewId} = params;

    if(!interviewId || typeof interviewId !== "string"){
        throw new Error("Invalid ID");
    }


    const interview = await prisma.interview.findUnique({
        where: {
            id: interviewId,
        }
    });

    if (!interview || (interview.userId !== currentUser.id && currentUser.role !== "ADMIN")) {
        return NextResponse.json({ message: "Interview not found" }, { status: 404 });
    }

    await prisma.interview.delete({
        where: {
            id: interviewId,
        }
    });

    return NextResponse.json(interview);
}


export async function POST(
    request: Request,
  ) {
    const currentUser = await getCurrentUser();
  
    if (!currentUser) {
      return NextResponse.error();
    }
  
    const { interviewId, interviewDate } = await request.json();
  
    if (!interviewId || typeof interviewId!== "string") {
      throw new Error("Invalid ID");
    }
    if (!interviewDate) {
      throw new Error("No interview date");
    }
  
    const parsedInterviewDate = new Date(Date.parse(interviewDate));
  
    let whereClause;
    if (currentUser.role === "ADMIN") {
      whereClause = { id: interviewId };
    } else {
      whereClause = { id: interviewId, userId: currentUser.id };
    }
  
    const updatedInterview = await prisma.interview.update({
      where: whereClause,
      data: {
        interviewDate: parsedInterviewDate,
      },
    });
  
    return NextResponse.json(updatedInterview);
  }