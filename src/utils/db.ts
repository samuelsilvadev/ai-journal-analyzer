import { PrismaClient } from "@prisma/client";

function createPrismaConnection() {
  return new PrismaClient({
    log: ["query"],
  });
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaConnection();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
