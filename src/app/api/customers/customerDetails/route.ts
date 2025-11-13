import { NextResponse } from "next/server";


export  async function GET(_req:Request, {params}: {params: {customerId: string}}) {
    const {customerId} = params;
    return NextResponse.json({ message: "Hello, "+customerId });
}