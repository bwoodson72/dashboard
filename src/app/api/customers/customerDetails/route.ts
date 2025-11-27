import { NextResponse } from "next/server";


export  async function GET(_req:Request, {params}: {params: {customerId: string}}) {
    const rawQuery = searchParams.get("search");
    const query = rawQuery?.trim();
    console.log(query);

    try {
        const customers = await prisma.customer.findMany({
            where: {
                OR:  [
                    {firstName: {equals: query, mode: "insensitive"}},
                    {lastName: {equals: query, mode: "insensitive"}},
                    {email: {contains: query, mode: "insensitive"}},
                ],
            },
            orderBy: [{lastName: "asc"}, {firstName: "asc"}],
            take: 50,
        });
        console.log(customers);
        return NextResponse.json(customers);
    } catch (e) {
        console.error(e);
        return NextResponse.json({message: "Search failed"}, {status: 500});
    } finally {
        await prisma.$disconnect();
    }
}