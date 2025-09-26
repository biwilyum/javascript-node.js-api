import { PrismaClient } from '@prisma/client';

// Initialize the Prisma Client
const db = new PrismaClient();

// Export the initialized client for use in other files
export default db;