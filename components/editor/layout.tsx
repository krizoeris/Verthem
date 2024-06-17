import React, { ReactNode } from "react";
import { Element, useNode, useEditor } from "@craftjs/core";
import { Column, ColumnContainer } from "./node/columns";
import { Plus } from "lucide-react";
import { cn } from "@/utils/merge-classes";

export const Layout = ({ children }: { children?: ReactNode }) => {
  const [activeLayout, setActiveLayout] = React.useState<
    "LayoutOne" | "LayoutTwo"
  >("LayoutOne");

  const {
    id,
    connectors: { connect, drag },
  } = useNode();
  const { actions, query } = useEditor();

  const appendColumn = (numColumns: number) => {
    const freshNode = query
      .parseReactElement(
        <Element canvas is={ColumnContainer}>
          {Array.from({ length: numColumns }, (_, index) => (
            <Element key={index} canvas is={Column}></Element>
          ))}
        </Element>,
      )
      .toNodeTree();
    actions.addNodeTree(freshNode, id);
  };

  const handleClick = () => {
    if (activeLayout === "LayoutOne") {
      setActiveLayout("LayoutTwo");
    } else {
      setActiveLayout("LayoutOne");
    }
  };

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className="w-full bg-white p-4"
      draggable="true"
    >
      {children}
      <div className={cn({ "pt-4": children })}>
        {activeLayout === "LayoutOne" && <LayoutOne onClick={handleClick} />}
        {activeLayout === "LayoutTwo" && (
          <LayoutTwo onClick={handleClick} onLayoutClick={appendColumn} />
        )}
      </div>
    </div>
  );
};

export const LayoutOne = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="p-4">
      <button
        onClick={onClick}
        className="flex flex-col items-center text-center text-slate-900/60 cursor-pointer w-full rounded-xl border-2 border-dotted border-slate-900/20 py-6"
      >
        <span className="flex items-center justify-center border rounded-md bg-white text-slate-900/60 h-10 w-10 px-2 mb-2">
          <Plus />
        </span>
        Select your layout
      </button>
    </div>
  );
};

export const LayoutTwo = ({
  onClick,
  onLayoutClick,
}: {
  onClick: () => void;
  onLayoutClick: (numColumns: number) => void;
}) => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center text-center text-slate-900/60 cursor-pointer w-full rounded-xl border-2 border-dotted border-slate-900/20 py-6">
        Select your layout
        <div className="flex flex-row w-1/2 gap-6 mt-3">
          <button
            onClick={() => {
              onLayoutClick(1);
              onClick();
            }}
            className="one-column-layout h-[70px] w-1/4"
          >
            <div className="h-[70px] bg-slate-900/10 hover:bg-slate-900/20 w-full"></div>
          </button>
          <button
            onClick={() => {
              onLayoutClick(2);
              onClick();
            }}
            className="two-column-layoutgroup h-[70px] w-1/4 flex flex-row gap-1"
          >
            <div className="h-[70px] bg-slate-900/10 group-hover:bg-slate-900/20 w-1/2"></div>
            <div className="h-[70px] bg-slate-900/10 group-hover:bg-slate-900/20 w-1/2"></div>
          </button>
          <button
            onClick={() => {
              onLayoutClick(3);
              onClick();
            }}
            className="three-column-layoutgroup h-[70px] w-1/4 flex flex-row gap-1"
          >
            <div className="h-[70px] bg-slate-900/10 group-hover:bg-slate-900/20 w-1/3"></div>
            <div className="h-[70px] bg-slate-900/10 group-hover:bg-slate-900/20 w-1/3"></div>
            <div className="h-[70px] bg-slate-900/10 group-hover:bg-slate-900/20 w-1/3"></div>
          </button>
          <button
            onClick={() => {
              onLayoutClick(4);
              onClick();
            }}
            className="four-column-layoutgroup h-[70px] w-1/4 flex flex-row gap-1"
          >
            <div className="h-[70px] bg-slate-900/10 group-hover:bg-slate-900/20 w-1/4"></div>
            <div className="h-[70px] bg-slate-900/10 group-hover:bg-slate-900/20 w-1/4"></div>
            <div className="h-[70px] bg-slate-900/10 group-hover:bg-slate-900/20 w-1/4"></div>
            <div className="h-[70px] bg-slate-900/10 group-hover:bg-slate-900/20 w-1/4"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

Layout.craft = {
  isCanvas: true,
};
