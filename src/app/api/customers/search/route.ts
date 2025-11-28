import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

/**
 * Customer Search API Route
 *
 * Searches for customers by first name, last name, or email (case-insensitive partial match).
 * Returns up to 50 results, ordered by last name and first name.
 *
 * @param {Request} req - The incoming request
 * @param {string} req.url - Must contain a "search" query parameter
 *
 * @returns {Promise<NextResponse>}
 * - 200: Array of matching customer objects
 * - 400: Missing or empty search query
 * - 500: Database error (error details only in development)
 *
 * @example
 * GET /api/customers/search?search=john
 * // Returns customers matching "john" in firstName, lastName, or email
 */
export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);

    const rawQuery = searchParams.get("search");
    const query = rawQuery?.trim();

    // Validate input
    if (!query || query.length < 1) {
        return NextResponse.json(
            { message: "Search query is required" },
            { status: 400 }
        );
    }

    try {
        const customers = await prisma.customer.findMany({
            where: {
                OR: [
                    {firstName: {contains: query, mode: "insensitive"}},
                    {lastName: {contains: query, mode: "insensitive"}},
                    {email: {contains: query, mode: "insensitive"}},
                ],
            },
            orderBy: [{lastName: "asc"}, {firstName: "asc"}],
            take: 50,
        });
        return NextResponse.json(customers);
    } catch (e) {
        console.error("Customer search error:", e);
        return NextResponse.json(
            {
                message: "Search failed",
                error: process.env.NODE_ENV === "development" ? String(e) : undefined
            },
            { status: 500 }
        );
    }
}