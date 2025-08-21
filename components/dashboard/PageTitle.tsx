"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const PageTitle = ({ subText }: Global.Props.PageTitleProps) => {
  const pathName: string = usePathname();

  return (
    <div className="flex justify-between items-end">
      <div>
        <h4 className="mb-2 text-lg text-neutral-700 font-semibold capitalize">
          {!pathName.split("/").slice(1)[1]
            ? pathName.split("/").slice(1)[0]
            : pathName.split("/").slice(1)[1]}
        </h4>
        <p>{subText}</p>
      </div>

      {/* Replace with an action component */}
      <div>
        <Button className="flex gap-2 bg-verthem-900 hover:bg-verthem-700 hover:transition-all text-base text-slate-900 font-medium">
          <Plus size={16}></Plus>Create New Campaign
        </Button>
      </div>
    </div>
  );
};

export default PageTitle;
