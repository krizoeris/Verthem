import React from "react";
import { useEditor } from "@craftjs/core";
import { useLayer } from "@craftjs/layers";
import { VerthemLayerHeader } from "@/components/editor/layers/verthem-layer-header";
import { cn } from "@/utils/merge-classes";

export const VerthemLayer = ({ children }: { children: React.ReactNode }) => {
  const {
    id,
    expanded,
    hovered,
    connectors: { layer },
  } = useLayer((layer) => ({
    hovered: layer.event.hovered,
    expanded: layer.expanded,
  }));
  const { hasChildCanvases } = useEditor((state, query) => {
    return {
      hasChildCanvases: query.node(id).isParentOfTopLevelNodes(),
    };
  });

  return (
    <div
      ref={(ref) => {
        if (ref) {
          layer(ref);
        }
      }}
      className={cn("block", {
        "bg-slate-50": hovered,
        "pb-5": hasChildCanvases && expanded,
      })}
    >
      <VerthemLayerHeader />
      {children ? (
        <div
          className={cn("relative", {
            "ml-9 bg-white/5 shadow-[0px_0px_44px_-1px_rgba(0,0,0,0.1)] rounded-2xl mr-1 mb-1 mt-1":
              hasChildCanvases,
          })}
        >
          {hasChildCanvases && (
            <div className="before:absolute before:left-[-19px] before:w-0.5 before:h-full before:content-[''] before:bg-black/10 overflow-hidden">
              {children}
            </div>
          )}
          {!hasChildCanvases && children}
        </div>
      ) : null}
    </div>
  );
};
