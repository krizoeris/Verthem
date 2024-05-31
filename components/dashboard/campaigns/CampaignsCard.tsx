import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";

export default function CampaignsCard() {
  return (
    <Card className="h-full p-10 flex flex-col items-center gap-4 bg-background">
      <div className="w-full h-[160px] flex gap-6 pb-8 border-b border-slate-200">
        <div className="w-[15%] rounded-md bg-slate-300"></div>
        <div className="w-[65%] h-full flex flex-col justify-center ">
          <p className="mb-2 flex items-center gap-2 text-lg font-semibold">
            <span>Campaign Title Here</span>{" "}
            <span className="py-1 px-2 bg-slate-100 rounded-full text-sm text-neutral-700 font-semibold uppercase">
              Draft
            </span>
          </p>
          <p className="text-base mb-2">
            https://subdomain.verthem.com/d0b224d7-5361-456c-be52-eda599131816
          </p>
          <p>
            <span className="text-muted-foreground">Last modified: </span>Feb 19
            at 8:45 am GMT+1
          </p>
        </div>
        <div className="w-[20%] flex gap-2 items-center justify-end">
          <Button className="bg-slate-100 hover:bg-slate-200 text-neutral-900 font-semibold">
            <Ellipsis size={16} />
          </Button>
          <Button className="bg-slate-100 hover:bg-slate-200 text-neutral-900 font-semibold">
            Preview
          </Button>
          <Button className="bg-slate-100 hover:bg-slate-200 text-neutral-900 font-semibold">
            Edit
          </Button>
        </div>
      </div>
    </Card>
  );
}
