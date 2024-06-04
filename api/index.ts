import { db } from "@/db";
import { Campaigns } from "@/db/schema";

async function getCampaigns() {
  try {
    const result = await db.select().from(Campaigns).execute();

    if (result.length === 0) {
      return [];
    }
    return result;
  } catch (error) {
    console.error("Failed to fetch campaigns:", error);
    throw new Error("Failed to fetch campaigns.");
  }
}

export { getCampaigns };
