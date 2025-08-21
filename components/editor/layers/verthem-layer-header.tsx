import { cn } from "@/utils/merge-classes";
import { useEditor } from "@craftjs/core";
import { EditableLayerName, useLayer } from "@craftjs/layers";
import { ChevronDown, ExternalLink, Eye } from "lucide-react";
import React from "react";

export const VerthemLayerHeader = () => {
  const {
    id,
    expanded,
    children,
    connectors: { drag, layerHeader },
    actions: { toggleLayer },
  } = useLayer((layer) => {
    return {
      expanded: layer.expanded,
    };
  });

  const { hidden, actions, selected, topLevel } = useEditor((state, query) => {
    const selected = query.getEvent("selected").first() === id;

    return {
      hidden: state.nodes[id] && state.nodes[id].data.hidden,
      selected,
      topLevel: query.node(id).isTopLevelCanvas(),
    };
  });

  return (
    <div
      className={cn(
        "flex flex-row items-center p-1.5",
        selected
          ? "bg-verthem-900 text-slate-900"
          : "bg-transparent text-inherit",
      )}
      ref={(ref) => {
        if (ref) {
          drag(ref);
        }
      }}
    >
      <a
        className={cn(
          "w-3.5 h-3.5 mr-2.5 relative transition-transform cursor-pointer",
          hidden ? "opacity-20" : "opacity-100",
        )}
        onClick={() => actions.setHidden(id, !hidden)}
      >
        <Eye className="w-full h-full object-contain" />
        <div
          className={cn(
            "absolute left-[2px] top-[3px] w-0.5 bg-slate-900 transition-transform transform -rotate-45",
            hidden ? "h-full opacity-40" : "h-0 opacity-100",
          )}
        />
      </a>
      <div className="flex-1 flex items-center ml-2">
        <div
          ref={(ref) => {
            if (ref) {
              layerHeader(ref);
            }
          }}
          className="flex-1 flex items-center"
        >
          {topLevel && (
            <div className="ml-[-22px] mr-2.5">
              <ExternalLink className="w-3 h-3" />
            </div>
          )}
          <div className="flex-1 layer-name">
            <EditableLayerName />
          </div>
          {children && children.length > 0 && (
            <a
              className={cn(
                "w-3.5 h-3.5 flex items-center justify-center transition-transform transform",
                expanded ? "rotate-180" : "rotate-0",
              )}
              onMouseDown={() => toggleLayer()}
            >
              <ChevronDown className="w-full h-full object-contain opacity-70" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
