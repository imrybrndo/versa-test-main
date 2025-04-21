import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("sb-access-token")?.value;

  const isProtectedRoute = request.nextUrl.pathname.startsWith("/admin");

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("pages/atuh/login/", request.url));
  }

  return NextResponse.next();
}
