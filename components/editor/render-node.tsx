import React, { ReactNode } from "react";
import { useNode, useEditor } from "@craftjs/core";
import { ROOT_NODE } from "@craftjs/utils";
import { cn } from "@/utils/merge-classes";
import { ArrowUpFromLine, Grip, Trash } from "lucide-react";

export const RenderNode = ({ render }: { render: ReactNode }) => {
  const { id } = useNode();
  const { actions, query, isActive } = useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains(id),
  }));

  const {
    isHover,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  return (
    <div
      className={cn("w-full", {
        "component-selected relative": isActive || isHover,
      })}
    >
      <div
        className={cn("component-control absolute -translate-y-full z-10", {
          hidden: !(isActive || isHover),
          flex: isActive || isHover,
        })}
      >
        <div
          ref={(ref) => {
            if (ref) {
              drag(ref);
            }
          }}
          className="px-2 py-2 text-slate-900 bg-verthem-900 fixed flex items-center rounded-t-sm h-[32px] -mt-[31px] text-sm leading-3 w-max"
        >
          <h2 className="flex-1 mr-4">{name}</h2>
          {moveable && (
            <div
              className="opacity-90 mr-2 cursor-move p-0 flex items-center"
              ref={(ref) => {
                if (ref) {
                  drag(ref);
                }
              }}
            >
              <Grip width={14} height={14} />
            </div>
          )}
          {id !== ROOT_NODE && parent && (
            <a
              className="opacity-90 mr-2 cursor-pointer"
              onClick={() => {
                actions.selectNode(parent);
              }}
            >
              <ArrowUpFromLine width={14} height={14} />
            </a>
          )}
          {deletable && (
            <a
              className="opacity-90 cursor-pointer"
              onMouseDown={(e: React.MouseEvent) => {
                e.stopPropagation();
                actions.delete(id);
              }}
            >
              <Trash width={14} height={14} />
            </a>
          )}
        </div>
      </div>
      {render}
    </div>
  );
};
