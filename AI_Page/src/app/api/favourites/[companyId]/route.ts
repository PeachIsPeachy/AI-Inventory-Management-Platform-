import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

interface FavParams {
    companyId?: string;
}

/**
 * @swagger
 * tags:
 *   name: Favourites
 *   description: Favourite company managing API
 */

/**
 * @swagger
 * /api/favourites/{companyId}:
 *   post:
 *     summary: Add a company to user's favorites
 *     tags: [Favourites]
 *     description: Adds the specified company to the favorites of the authenticated user.
 *     parameters:
 *       - in: path
 *         name: companyId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the company to add to favorites.
 *     responses:
 *       '200':
 *         description: Successfully added company to favorites.
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
    request: Request,
    { params }: { params: FavParams }
) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return NextResponse.error()
    }

    const { companyId } = params

    if (!companyId || typeof companyId !== 'string') {
        throw new Error('Invalid Id')
    }

    let favouriteIds = [...(currentUser.favouriteIds || [])]

    favouriteIds.push(companyId)

    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favouriteIds: favouriteIds
        }
    })

    return NextResponse.json(user)
}


/**
 * @swagger
 * /api/favourites/{companyId}:
 *   delete:
 *     summary: Remove a company from user's favorites
 *     tags: [Favourites]
 *     description: Removes the specified company from the favorites of the authenticated user.
 *     parameters:
 *       - in: path
 *         name: companyId
 *         schema:
 *           type: string
 *         required : true
 *         description: The ID of the company to remove from favorites.
 *     responses:
 *       '200':
 *         description: Successfully removed company from favorites.
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
export async function DELETE(
    request: Request,
    { params }: { params: FavParams }
) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return NextResponse.error()
    }

    const { companyId } = params

    if (!companyId || typeof companyId !== 'string') {
        throw new Error('Invalid Id')
    }

    let favouriteIds = [...(currentUser.favouriteIds || [])]

    favouriteIds = favouriteIds.filter((id) => id !== companyId)

    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favouriteIds: favouriteIds
        }
    })

    return NextResponse.json(user)
}