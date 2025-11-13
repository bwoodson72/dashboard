import { NextResponse } from "next/server";
import {PrismaClient} from "@/generated/prisma/client";
const prisma = new PrismaClient()

export  async function GET(_req:Request) {
    // try {
    //     const customers = await prisma.customer.findMany({
    //         where:{lastName: "Karloff"}
    //     });
    //     console.log(customers);
    //     return NextResponse.json(customers );
    // }
    // catch (error) {
    //     console.error(error);
    //     return NextResponse.json({message: "Error fetching customers: ", error})
    // }
    // finally {
    //     await prisma.$disconnect();
    // }
    return NextResponse.json({message: "Hello, World!"});

}