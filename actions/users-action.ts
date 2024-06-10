"use server";
import { db } from "@/db";
import { Users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUser(email: string): Promise<any> {
  // return undefined;
  try {
    const result = await db.select().from(Users).where(eq(Users.email, email));

    if (result.length === 0) {
      return undefined;
    }

    const user = result[0];
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function createUser(
  name: string,
  email: string,
  picture: string,
): Promise<void> {
  const id = crypto.randomUUID();
  const date = new Date();

  try {
    const data = await db
      .insert(Users)
      .values({
        name: name,
        email: email,
        image: picture,
        createdAt: date,
        updatedAt: date,
      })
      .returning();

    return;
  } catch (error) {
    throw error;
  }
}
