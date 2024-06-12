"use server";
import { db } from "@/db";
import { Users, UsersOnWorkspaces, Workspaces } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUserByEmail(email: string): Promise<any> {
  try {
    const getUser = await db
      .select()
      .from(Users)
      .where(eq(Users.email, email))
      .get();

    if (!getUser)
      return {
        error: "No users found",
      };

    return {
      success: getUser,
    };
  } catch (error) {
    console.error("[CODE ERROR]: ", error);
    return { error };
  }
}

export async function createUser(name: string, email: string, image: string) {
  try {
    const newUser = await db
      .insert(Users)
      .values({
        name,
        email,
        image,
      })
      .returning({
        id: Users.id,
        name: Users.name,
      })
      .get();

    const isWorkspaceTitleExist = await db
      .select()
      .from(Workspaces)
      .where(eq(Workspaces.title, newUser.name))
      .get();
    const title: string = isWorkspaceTitleExist
      ? `${newUser.name}-${newUser.id}`
      : newUser.name.toString();

    const newWorkspace = await db
      .insert(Workspaces)
      .values({
        title,
      })
      .returning({
        id: Workspaces.id,
        title: Workspaces.title,
      })
      .get();

    await db.insert(UsersOnWorkspaces).values({
      userId: newUser.id,
      workspaceId: newWorkspace.id,
    });

    return {
      success: newUser,
    };
  } catch (error) {
    console.error("[CODE ERROR]: ", error);
    return { error };
  }
}
