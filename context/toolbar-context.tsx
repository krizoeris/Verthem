"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";
import { useEditor } from "@craftjs/core";

interface SelectedType {
  id: string;
  name: string;
  settings: React.ElementType<any, keyof React.JSX.IntrinsicElements>;
}

interface ToolbarContextType {
  selectedTool: string;
  isCollapsed: boolean;
  handleToolClick: (tool: string) => void;
  selectedNode: SelectedType | undefined;
}

const ToolbarContext = createContext<ToolbarContextType | undefined>(undefined);

export const ToolbarProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTool, setSelectedTool] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { selectedNode } = useEditor((state) => {
    let currentNodeId: string | undefined;

    state.events.selected?.forEach((id) => {
      currentNodeId = id;
    });

    let selectedData;

    if (currentNodeId) {
      selectedData = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
      };
    }

    return {
      selectedNode: selectedData,
    };
  });

  const handleToolClick = (tool: string) => {
    if (selectedTool === tool) {
      setIsCollapsed(!isCollapsed);
    } else {
      setSelectedTool(tool);
      setIsCollapsed(true);
    }
  };

  return (
    <ToolbarContext.Provider
      value={{ selectedTool, isCollapsed, handleToolClick, selectedNode }}
    >
      {children}
    </ToolbarContext.Provider>
  );
};

export const useToolbar = (): ToolbarContextType => {
  const context = useContext(ToolbarContext);
  if (!context) {
    throw new Error("useToolbar must be used within a ToolbarProvider");
  }
  return context;
};
