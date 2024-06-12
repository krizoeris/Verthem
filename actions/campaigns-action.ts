import { db } from "@/db";
import { getWorkspaceByEmail } from "./workspaces-action";

export const getCampaignsByWorkspace = async () => {
  try {
    const workspace = await getWorkspaceByEmail();

    if (workspace?.error) return { error: workspace?.error };

    const workspaceId = Number(workspace?.success);

    const response = await db.query.Workspaces.findFirst({
      where: (Workspaces, { eq }) => eq(Workspaces.id, workspaceId),
      with: {
        campaigns: {
          with: {
            pages: true,
          },
        },
      },
    });

    return {
      success: response,
    };
  } catch (error) {
    console.error("[CODE ERROR]: ", error);
    return { error };
  }
};
