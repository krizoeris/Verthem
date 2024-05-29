import { cn } from "@/utils/merge-classes";

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
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input px-9 py-12 bg-white border-2 border-verthem-400 justify-between flex flex-col even:flex-col-reverse space-y-4",
        className,
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 even:pb-4">
        <div className="text-2xl font-medium mb-2">{title}</div>
        <p className="text-slate-500">{description}</p>
      </div>
    </div>
  );
};
