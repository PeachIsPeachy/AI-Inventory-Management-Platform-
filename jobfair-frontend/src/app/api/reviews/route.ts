import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: The review managing API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the review.
 *         rating:
 *           type: number
 *           description: The rating given for the company.
 *         comment:
 *           type: string
 *           description: The comment provided for the company.
 *         userId:
 *           type: string
 *           description: The ID of the user who submitted the review.
 *         companyId:
 *           type: string
 *           description: The ID of the company being reviewed.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the review was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the review was last updated.
 *       required:
 *         - rating
 *         - comment
 *         - userId
 *         - companyId
 */


/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Add a review for a company
 *     tags: [Reviews]
 *     description: Adds a review with rating and comment for the specified company.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rating:
 *                 type: number
 *                 description: The rating given for the company.
 *               comment:
 *                 type: string
 *                 description: The comment provided for the company.
 *               companyId:
 *                 type: string
 *                 description: The ID of the company for which the review is added.
 *     responses:
 *       '200':
 *         description: Successfully added review for the company.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       '400':
 *         description: Bad request, invalid input or missing required fields.
 *       '401':
 *         description: Unauthorized, user not authenticated.
 *       '500':
 *         description: Internal server error.
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
        rating,
        comment,
        companyId
    } = body

    // Time in Database is UTC time, so dont worry if the interviewDate posted seems wrong, its correct.
    const companyAndReview = await prisma.company.update({
        where: {
            id: companyId
        },
        data: {
            reviews: {
                create: {
                    userId: currentUser.id,
                    rating,
                    comment
                }
            }
        }
    })

    return NextResponse.json(companyAndReview)
}