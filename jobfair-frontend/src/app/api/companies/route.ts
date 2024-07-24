import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

/**
 * @swagger
 * tags:
 *   name: Companies
 *   description: The company managing API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Company:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the company.
 *         name:
 *           type: string
 *           description: The name of the company.
 *         description:
 *           type: string
 *           description: The description of the company.
 *         imageSrc:
 *           type: string
 *           description: The image source of the company.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the company was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the company was last updated.
 *         category:
 *           type: string
 *           description: The category of the company.
 *         address:
 *           type: string
 *           description: The address of the company.
 *         locationValue:
 *           type: string
 *           description: The location value of the company.
 *         website:
 *           type: string
 *           description: The website of the company.
 *         tel:
 *           type: string
 *           description: The telephone number of the company.
 *         userId:
 *           type: string
 *           description: The ID of the user associated with the company.
 *       required:
 *         - name
 *         - description
 *         - category
 *         - address
 *         - locationValue
 *         - website
 *         - tel
 *         - userId
 */

/**
 * @swagger
 * /api/companies:
 *   post:
 *     summary: Create a new company
 *     tags: [Companies]
 *     description: Creates a new company with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the company.
 *               description:
 *                 type: string
 *                 description: The description of the company.
 *               imageSrc:
 *                 type: string
 *                 description: The image source of the company.
 *               category:
 *                 type: string
 *                 description: The category of the company.
 *               address:
 *                 type: string
 *                 description: The address of the company.
 *               location:
 *                 type: object
 *                 properties:
 *                   value:
 *                     type: string
 *                     description: The location value of the company.
 *               website:
 *                 type: string
 *                 description: The website of the company.
 *               tel:
 *                 type: string
 *                 description: The telephone number of the company.
 *     responses:
 *       '200':
 *         description: Successfully created company.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
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
        return NextResponse.error();
    }

    const body = await request.json()
    const {
        name,
        description,
        imageSrc,
        category,
        address,
        location,
        website,
        tel,
    } = body

    const company = await prisma.company.create({
        data: {
            name,
            description,
            imageSrc,
            category,
            address,
            locationValue: location.value,
            website,
            tel,
            userId: currentUser.id,
        }
    })

    return NextResponse.json(company)
}