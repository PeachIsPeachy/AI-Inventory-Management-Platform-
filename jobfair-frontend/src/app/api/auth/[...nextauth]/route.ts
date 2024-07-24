import bcrypt from "bcrypt"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import prisma from "@/libs/prismadb"

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User API
 */

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       '200':
 *         description: User registration successful
 *         schema:
 *           $ref: '#/definitions/User'
 *       '400':
 *         description: Bad request - Invalid input data
 *       '500':
 *         description: Internal server error
 */
/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *         format: uuid
 *       name:
 *         type: string
 *       tel:
 *         type: string
 *       role:
 *         type: string
 *       email:
 *         type: string
 *       emailVerified:
 *         type: string
 *         format: date-time
 *       image:
 *         type: string
 *       createdAt:
 *         type: string
 *         format: date-time
 *       updatedAt:
 *         type: string
 *         format: date-time
 *       favouriteIds:
 *         type: array
 *         items:
 *           type: string
 *           format: uuid
 *       companyId:
 *         type: string
 *         format: uuid
 */

/**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     summary: Sign in with email and password
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Credentials'
 *     responses:
 *       '200':
 *         description: Successful authentication
 *         schema:
 *           type: object
 *           properties:
 *             token:
 *               type: string
 *               description: JSON Web Token (JWT) for subsequent requests
 *       '401':
 *         description: Unauthorized - Invalid credentials
 *       '500':
 *         description: Internal server error
 * definitions:
 *   Credentials:
 *     type: object
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 */

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid credentials');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
        }

        return user;
      }
    })
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export {handler as GET ,handler as POST};