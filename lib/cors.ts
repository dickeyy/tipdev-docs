import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = ["https://tip.dev", "https://docs.tip.dev", "http://localhost:3000"];

export function withCors(handler: any) {
    return async (req: NextRequest, ...args: any[]) => {
        const origin = req.headers.get("origin");
        const allowOrigin = origin && allowedOrigins.includes(origin) ? origin : "";

        // Handle preflight
        if (req.method === "OPTIONS") {
            return new NextResponse(null, {
                status: 204,
                headers: {
                    "Access-Control-Allow-Origin": allowOrigin,
                    "Access-Control-Allow-Methods": "GET,OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type"
                }
            });
        }

        const res = await handler(req, ...args);

        // Add CORS headers to the response
        if (allowOrigin) {
            res.headers.set("Access-Control-Allow-Origin", allowOrigin);
            res.headers.set("Access-Control-Allow-Methods", "GET,OPTIONS");
            res.headers.set("Access-Control-Allow-Headers", "Content-Type");
        }

        return res;
    };
}
