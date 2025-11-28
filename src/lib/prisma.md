# Prisma Client Singleton

This document explains the PrismaClient singleton pattern used in this Next.js application.

## Overview

The `prisma.ts` file exports a singleton instance of PrismaClient to prevent connection pool exhaustion in Next.js applications, especially during development with hot module reloading.

## Why a Singleton?

In Next.js, each module reload during development can create a new PrismaClient instance, leading to multiple database connections. This can quickly exhaust the connection pool. By using a singleton pattern, we ensure only one PrismaClient instance exists per process.

## How It Works

1. **Development**: The instance is stored in `globalThis` to persist across hot reloads
2. **Production**: A new instance is created per serverless function/process
3. **Type Safety**: Uses TypeScript to safely access the global variable

## Usage

```typescript
import { prisma } from '@/lib/prisma';

// Use in API routes or server components
const users = await prisma.user.findMany();
const customer = await prisma.customer.findUnique({
  where: { id: 1 }
});
```

## Important Notes

- **Always import from this file** - Never create new PrismaClient instances directly
- The client automatically handles connection pooling
- In serverless environments, each function invocation may get a new instance
- The client will automatically disconnect when the process ends
- No need to manually call `$disconnect()` in most cases

## Examples

### ✅ Correct Usage

```typescript
// In API routes
import { prisma } from '@/lib/prisma';

export async function GET() {
  const customers = await prisma.customer.findMany();
  return Response.json(customers);
}
```

```typescript
// In server components
import { prisma } from '@/lib/prisma';

export default async function Page() {
  const products = await prisma.product.findMany();
  return <div>{/* render products */}</div>;
}
```

### ❌ Incorrect Usage

```typescript
// Don't create new instances
import { PrismaClient } from '@/generated/prisma/client';
const prisma = new PrismaClient(); // This can cause connection issues!
```

```typescript
// Don't create multiple instances
const prisma1 = new PrismaClient();
const prisma2 = new PrismaClient(); // Multiple connections!
```

## Connection Management

### Development
- Single instance shared across hot reloads via `globalThis`
- Prevents connection pool exhaustion during development

### Production
- Each serverless function may create its own instance
- This is acceptable as functions run in separate processes
- Connections are automatically cleaned up when functions complete

## Related Resources

- [Prisma Connection Management Guide](https://www.prisma.io/docs/guides/performance-and-optimization/connection-management#prismaclient-in-serverless-environments)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Prisma Client API Reference](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)

