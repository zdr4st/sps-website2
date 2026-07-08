import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  const isAdminRoute = path.startsWith("/admin");
  const isLoginRoute = path === "/admin/login";

  if (isAdminRoute && !isLoginRoute) {
    const token = request.cookies.get("admin_token")?.value;
    
    if (!token || token !== "authorized") {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  if (isLoginRoute) {
    const token = request.cookies.get("admin_token")?.value;
    if (token === "authorized") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
