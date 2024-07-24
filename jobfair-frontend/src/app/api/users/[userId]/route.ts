import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

interface UserParams {
    userId?: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the user.
 *         name:
 *           type: string
 *           nullable: true
 *           description: The name of the user.
 *         tel:
 *           type: string
 *           nullable: true
 *           description: The telephone number of the user.
 *         role:
 *           type: string
 *           description: The role of the user.
 *         email:
 *           type: string
 *           description: The email address of the user.
 *         emailVerified:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: The date and time when the email address was verified.
 *         image:
 *           type: string
 *           nullable: true
 *           description: The image URL of the user.
 *         hashedPassword:
 *           type: string
 *           nullable: true
 *           description: The hashed password of the user.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the user was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the user was last updated.
 *         favouriteIds:
 *           type: array
 *           items:
 *             type: string
 *           description: An array of company IDs that the user has favorited.
 *         companyId:
 *           type: string
 *           nullable: true
 *           description: The ID of the company associated with the user.
 *       required:
 *         - role
 *         - email
 *       uniqueItems:
 *         - email
 */

/**
 * @swagger
 * /api/users/[userId]:
 *   put:
 *     summary: Update user role and company
 *     tags: [Users]
 *     description: Updates the role and company of the specified user.
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         description: The ID of the user to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 description: The new role of the user.
 *               companyId:
 *                 type: string
 *                 description: The ID of the company associated with the user.
 *     responses:
 *       '200':
 *         description: Successfully updated user role and company.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '400':
 *         description: Bad request, invalid input or missing required fields.
 *       '401':
 *         description: Unauthorized, user not authenticated.
 *       '500':
 *         description: Internal server error.
 */
export async function POST(
    request: Request,
    { params }: { params: UserParams }
) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return NextResponse.error()
    }

    const { userId } = params

    if (!userId || typeof userId !== 'string') {
        throw new Error('Invalid User Id')
    }

    const body = await request.json()

    const {
        role,
        companyId
    } = body

    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            role,
            companyId,
        }
    })

    return NextResponse.json(user)
}