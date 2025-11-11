import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";



export async function GET(req: Request) {
    const prisma = new PrismaClient();
  console.log('customer search route');

  const { searchParams } = new URL(req.url);
  const q = searchParams.get("search");

  // try {
  //   const customers = await prisma.customer.findMany({
  //     where: {
  //       OR: [
  //         { firstName: { contains: q, mode: "insensitive" } },
  //         { lastName:  { contains: q, mode: "insensitive" } },
  //         { email:     { contains: q, mode: "insensitive" } },
  //       ],
  //     },
  //     orderBy: [{ lastName: "asc" }, { firstName: "asc" }],
  //     take: 50,
  //   });
  //   return NextResponse.json(customers);
  // } catch (e) {
  //   console.error(e);
  //   return NextResponse.json({ message: "Search failed" }, { status: 500 });
  // } finally {
  //   await prisma.$disconnect();
  // }
}