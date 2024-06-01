import { NextRequest, NextResponse } from "next/server";
import { getCampaigns } from "@/api";

export async function GET(req: NextRequest) {
  try {
    const campaigns = await getCampaigns();
    return NextResponse.json(campaigns);
  } catch (error) {
    console.error("Failed to fetch campaigns:", error);
    return NextResponse.json(
      { error: "Failed to fetch campaigns" },
      { status: 500 },
    );
  }
}
