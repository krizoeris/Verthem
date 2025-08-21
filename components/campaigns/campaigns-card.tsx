"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// import lucide icons
import { Ellipsis } from "lucide-react";
import { Image } from "lucide-react";

// import utilities
import { campaignStatusClass, formatDateTime } from "@/utils/index";

import type { campaigns } from "./campaigns-list";

type CampaignListProps = {
  campaign: campaigns;
};

const CampaignsCard = ({ campaign }: CampaignListProps) => {
  return (
    <div className="w-full h-[160px] flex gap-6 pb-8 border-b border-slate-200">
      <div
        className={`${campaign ? "w-[15%] flex items-center justify-center rounded-md bg-slate-300 text-slate-400" : "w-[15%] flex items-center justify-center rounded-md bg-slate-300"}`}
      >
        {/* replace with image */}
        <Image width={32} height={32} />
      </div>
      <div className="w-[65%] h-full flex flex-col justify-center ">
        <p className="mb-2 flex items-center gap-2 text-lg font-semibold">
          <span>{campaign.title}</span>
          <span
            className={`py-2 px-3 rounded-full text-[10px] leading-none font-semibold uppercase ${campaignStatusClass(campaign.status)}`}
          >
            {campaign.status}
          </span>
        </p>
        <p className="text-base mb-2 flex items-center gap-2">
          {campaign.domain.toString()}
        </p>
        <p>
          <span className="text-muted-foreground">Last modified: </span>
          {campaign.updatedAt && formatDateTime(campaign.updatedAt.toString())}
        </p>
      </div>
      <div className="w-[20%] flex gap-2 items-center justify-end">
        <Button className="bg-slate-100 hover:bg-slate-200 text-neutral-900 font-semibold">
          <Ellipsis size={16} />
        </Button>
        <Button className="bg-slate-100 hover:bg-slate-200 text-neutral-900 font-semibold">
          {/* TODO: replace with preview component */}
          <Link href={`${campaign.domain}`}>Preview</Link>
        </Button>
        <Button className="bg-slate-100 hover:bg-slate-200 text-neutral-900 font-semibold">
          Edit
        </Button>
      </div>
    </div>
  );
};

export default CampaignsCard;
