import { PrismaClient } from "@prisma/client";

import { getServerEnv } from "@/lib/env";

// Validate server environment when Prisma client is initialized.
getServerEnv();

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

/**
 * Singleton Prisma client for server-side database access.
 * Reuses the instance in development to prevent connection exhaustion.
 */
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
