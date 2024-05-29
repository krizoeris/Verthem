"use client";

import { useState } from "react";
import { cn } from "@/utils/merge-classes";
import Tilt from "react-parallax-tilt";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-8", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  const [scale, setScale] = useState(1.03);

  return (
    <Tilt scale={scale} transitionSpeed={2500}>
      <div
        className={cn(
          "bento-grid row-span-1 rounded-2xl lg:min-h-[520px] group/bento hover:shadow-xl transition duration-200 shadow-input px-9 py-12 bg-white border-2 border-verthem-400 justify-between flex flex-col even:flex-col-reverse space-y-4",
          className,
        )}
      >
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200 even:pb-4">
          <div className="text-2xl font-medium mb-2">{title}</div>
          <p className="text-slate-500">{description}</p>
        </div>
      </div>
    </Tilt>
  );
};
