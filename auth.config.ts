import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // const isOnDashboad = nextUrl.pathname.startsWith("/dashboard");
      // if (isOnDashboad) {
      //   if (isLoggedIn) return true;
      //   return false;
      // } else if (isLoggedIn) {
      //   return Response.redirect(new URL("/dashboard", nextUrl));
      // }
      // return true;
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
