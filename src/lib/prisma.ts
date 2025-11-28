/**
 * Prisma Client Singleton
 *
 * Exports a singleton PrismaClient instance to prevent connection pool exhaustion
 * in Next.js applications. In development, the instance persists across hot reloads.
 *
 * @see {@link ./prisma.md} For detailed documentation and usage examples
 */

import { PrismaClient } from "@/generated/prisma/client";

/**
 * Type-safe global variable to store the PrismaClient instance.
 * Prevents TypeScript errors when accessing globalThis.prisma.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

/**
 * Singleton PrismaClient instance.
 *
 * In development: Reuses the same instance across hot reloads via globalThis.
 * In production: Each serverless function may create a new instance (acceptable).
 */
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

/**
 * Store the PrismaClient instance in globalThis during development.
 * This ensures the same instance is reused across Next.js hot module reloads,
 * preventing connection pool exhaustion.
 */
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}