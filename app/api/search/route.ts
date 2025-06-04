import { withCors } from "@/lib/cors";
import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

const { GET: originalGET } = createFromSource(source);

// Wrap the GET handler with CORS
export const GET = withCors(originalGET);

// Optionally, handle OPTIONS for preflight
export const OPTIONS = withCors(() => new Response(null, { status: 204 }));
