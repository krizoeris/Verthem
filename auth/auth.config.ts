import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboad = nextUrl.pathname.startsWith("/dashboard");
      const isOnCampaign = nextUrl.pathname.startsWith("/campaigns");
      const isOnIntegration = nextUrl.pathname.startsWith("/integration");
      const isOnDomains = nextUrl.pathname.startsWith("/domains");
      const isOnSettings = nextUrl.pathname.startsWith("/settings");
      if (
        isOnDashboad ||
        isOnCampaign ||
        isOnIntegration ||
        isOnDomains ||
        isOnSettings
      ) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
