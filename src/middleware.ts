import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Cloudflare injects cf-ipcountry with a 2-letter ISO code.
  // On localhost the header is absent — skip so manual cookie overrides
  // and the client-side timezone fallback work correctly.
  const country = request.headers.get("cf-ipcountry");

  if (country) {
    response.cookies.set("geo-country", country, {
      path: "/",
      maxAge: 3600,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
  ],
};
