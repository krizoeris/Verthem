import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/dashboard/PageTitle";

import CampaignsCard from "@/components/dashboard/campaigns/CampaignsCard";

type CampaignListProps = {
  hasCampaigns: boolean;
};

const CampaignList: React.FC<CampaignListProps> = ({ hasCampaigns }) => {
  if (hasCampaigns) {
    return (
      // TODO: pass values of the campaigns and loop thru the list
      <CampaignsCard />
    );
  } else {
    return (
      <Card className="h-full p-10 flex flex-col justify-center items-center gap-4 bg-background">
        <div className="w-full h-full flex items-center justify-center border border-dashed border-muted-foreground rounded-md">
          <div className="w-[520px] flex flex-col items-center gap-4 text-center">
            <h3 className="text-xl text-neutral-700 font-semibold">
              Welcome to Verthem! 👋🏼
            </h3>
            <p className="text-muted-foreground">
              Start crafting a visually appealing and high-converting page
              today. Our intuitive builder lets you drag, drop, and customize
              every element to match your marketing needs!
            </p>
            <Button className="flex gap-2 bg-verthem-900 hover:bg-verthem-700 hover:transition-all text-base text-slate-900 font-medium">
              Start Building Now
            </Button>
          </div>
        </div>
      </Card>
    );
  }
};

export default function CampaignsPage() {
  const subText: string = "Display all related campaigns here.";

  return (
    <section className="h-full flex flex-col gap-4">
      <PageTitle subText={subText} />

      {/* Check if database has campaign values */}
      <CampaignList hasCampaigns={true} />
    </section>
  );
}
