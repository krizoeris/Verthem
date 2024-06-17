import React, { useEffect } from "react";
import Link from "next/link";
import { Layers } from "@craftjs/layers";
import { useToolbar } from "@/context/toolbar-context";
import { VerthemLayer } from "@/components/editor/layers/verthem-layer";
import ComponentList from "@/components/editor/component-list";
import { SettingsContainer } from "@/components/editor/component-settings";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Layers as LayerIcon, Plus, Settings2 } from "lucide-react";

export default function Toolbar() {
  const { isCollapsed } = useToolbar();

  return (
    <div
      className={`h-full relative transition-width duration-300 ${isCollapsed ? "w-[375px] min-w-[375px]" : "w-[55px]"}`}
    >
      <aside className={`bg-white inset-y-0`}>
        <EditorToolbox />
        <EditorToolbar />
      </aside>
    </div>
  );
}

const EditorToolbar = () => {
  const { selectedTool, isCollapsed, handleToolClick, selectedNode } =
    useToolbar();

  const tools = [
    { name: "components", icon: Plus },
    { name: "layers", icon: LayerIcon },
    { name: "settings", icon: Settings2, disabled: !selectedNode?.settings }, // Disable if no tool element is selected
  ];

  return (
    <div className="absolute inset-y-0 right-0 w-14 flex-col border-l bg-background flex">
      <nav className="flex flex-col items-center gap-3 mt-2 px-2 sm:py-5">
        <TooltipProvider>
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Tooltip key={tool.name}>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    onClick={() => handleToolClick(tool.name)}
                    className={`flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 outline outline-1 outline-slate-100 ${isCollapsed && selectedTool === tool.name ? "bg-slate-100" : ""}`}
                  >
                    <Icon className="h-4 w-4 text-slate-950" />
                    <span className="sr-only capitalize">{tool.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="capitalize">
                  {tool.name}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </nav>
    </div>
  );
};

const EditorToolbox = () => {
  const { selectedTool, isCollapsed, selectedNode, handleToolClick } =
    useToolbar();

  useEffect(() => {
    if (!selectedNode?.settings && selectedTool === "settings") {
      handleToolClick("components");
    }
  }, [selectedNode, selectedTool, handleToolClick]);

  const tools = [
    { key: "components", toolbox: <ComponentList /> },
    { key: "layers", toolbox: <Layers renderLayer={VerthemLayer} /> },
    {
      key: "settings",
      toolbox: (
        <SettingsContainer>
          {selectedNode?.settings && React.createElement(selectedNode.settings)}
        </SettingsContainer>
      ),
    },
  ];

  let ToolComponent = tools.find((tool) => tool.key === selectedTool)?.toolbox;

  if (selectedTool === "settings" && !selectedNode) {
    ToolComponent = <ComponentList />;
  }

  return (
    <div className={`${isCollapsed ? "" : "hidden"}`}>
      {ToolComponent && (
        <div className="absolute inset-y-0 w-80 flex flex-col border-l bg-background right-[55px]">
          {ToolComponent}
        </div>
      )}
    </div>
  );
};
