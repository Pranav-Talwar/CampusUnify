import { PrismaClient } from "@prisma/client";

console.log("inside prisma")

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Prevent multiple instances of PrismaClient in development
export const prisma = globalForPrisma.prisma || new PrismaClient();

// set the global prisma to the prisma client
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
export default prisma;
