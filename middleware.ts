import NextAuth from "next-auth";
import { NextResponse, NextRequest } from "next/server";
import { authConfig } from "@/auth/auth.config";

const { auth } = NextAuth(authConfig);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};

export default auth(async function middleware(req: NextRequest) {
  const session = await auth();
  const publicURL = ["/", "/login"];

  if (req.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  if (!session && !publicURL.includes(req.nextUrl.pathname)) {
    const URL = req.nextUrl.clone();
    URL.pathname = "/login";
    return NextResponse.redirect(URL);
  }

  if (session && req.nextUrl.pathname === "/login") {
    const URL = req.nextUrl.clone();
    URL.pathname = "/dashboard";
    return NextResponse.redirect(URL);
  }
});
