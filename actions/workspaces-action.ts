import { db } from "@/db";
import { auth } from "@/lib/auth";

export const getWorkspaceByEmail = async () => {
  try {
    const session = await auth();
    const email = session?.user?.email;

    if (!email) return { error: "No Email found!" };

    const query = await db.query.Users.findFirst({
      where: (Users, { eq }) => eq(Users.email, email),
      with: {
        usersOnWorkspaces: true,
      },
    });

    if (!query) return { error: "No Workspace found!" };

    return {
      success: query?.usersOnWorkspaces[0].workspaceId,
    };
  } catch (error) {
    console.error("[CODE ERROR]: ", error);
    return { error };
  }
};
