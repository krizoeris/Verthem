import NextAuth, { AuthError } from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { db } from "@/db";
import { sql } from "drizzle-orm/sql";
import { Users } from "@/db/schema";
import { User } from "@/app/types/definitions";
import bcrypt from "bcrypt";

async function getUser(email: string): Promise<User | undefined> {
  try {
    const result = await db
      .select()
      .from(Users)
      .where(sql`email = ${email}`)
      .execute();

    if (result.length === 0) {
      return undefined;
    }

    const user = result[0];
    return user as User;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordMatch = await bcrypt.compare(password, user.password);
          console.log("passwordMatch", passwordMatch);
          if (passwordMatch) return user;
        }
        console.log("Invalid Credentials");
        return null;
      },
    }),
  ],
});
