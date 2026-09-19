import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

const AUTH_COOKIE_NAME = "sps_admin_session";

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  const isAdminRoute = path.startsWith("/admin");
  const isLoginRoute = path === "/admin/login";
  const isApiRoute = path.startsWith("/api/");

  // Protect admin routes (except login page)
  if (isAdminRoute && !isLoginRoute) {
    const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
    
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Verify JWT with Supabase
    const isValid = await verifyTokenInMiddleware(token);
    if (!isValid) {
      // Clear invalid cookie and redirect to login
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      response.cookies.delete(AUTH_COOKIE_NAME);
      return response;
    }
  }

  // If already logged in, redirect away from login page
  if (isLoginRoute) {
    const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
    if (token) {
      const isValid = await verifyTokenInMiddleware(token);
      if (isValid) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
    }
  }

  // Protect admin API routes
  if (isApiRoute && path.startsWith("/api/csv/")) {
    const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const isValid = await verifyTokenInMiddleware(token);
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

/**
 * Lightweight JWT verification for middleware context.
 * Uses Supabase client to validate the access token.
 */
async function verifyTokenInMiddleware(token: string): Promise<boolean> {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data, error } = await supabase.auth.getUser(token);
    
    if (error || !data.user) return false;

    // Optionally restrict to specific admin email
    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail && data.user.email !== adminEmail) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

export const config = {
  matcher: ["/admin/:path*", "/api/csv/:path*"],
};
