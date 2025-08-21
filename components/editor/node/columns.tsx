import React, { ReactNode, useState } from "react";
import { useNode, Node } from "@craftjs/core";
import {
  ColorSettings,
  LayoutSettings,
  SizeSettings,
  SpaceSettings,
} from "@/components/editor/component-settings";
import { ContainerSettings } from "@/components/editor/node/container";
import { useToolbar } from "@/context/toolbar-context";
import { cn } from "@/utils/merge-classes";

export type ColumnProps = {
  background?: string;
  padding?: number;
  children?: ReactNode;
  className?: string;
};

export const Column = ({
  background,
  padding,
  children,
  className,
}: ColumnProps) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({ node }));

  const { handleToolClick } = useToolbar();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      handleToolClick("settings");
    }
  };

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      onClick={handleClick}
      className="flex w-full p-4"
    >
      {children ? (
        children
      ) : (
        <div className="w-full text-center rounded-xl border-2 border-dotted px-2 py-4">
          <p className="text-slate-900/20">Drop an element here</p>
        </div>
      )}
    </div>
  );
};

export const ColumnSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <>
      <LayoutSettings />
      <ColorSettings />
      <SpaceSettings />
      <SizeSettings />
    </>
  );
};

export const ColumnContainer = ({
  background,
  padding,
  children,
  className,
  ...props
}: ColumnProps) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({ node }));
  const { handleToolClick } = useToolbar();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      handleToolClick("settings");
    }
  };

  return (
    <div
      {...props}
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      onClick={handleClick}
      tabIndex={0}
      className={cn("w-full flex flex-row", { "p-4": !children })}
    >
      {children ? (
        children
      ) : (
        <div className="text-center rounded-xl border-2 border-dotted px-8 py-4 w-full">
          <p className="text-slate-900/20">Drop an element here</p>
        </div>
      )}
    </div>
  );
};

export const ColumnDefaultProps: ColumnProps = {
  background: "#ffffff",
  padding: 16,
};

ColumnContainer.craft = {
  name: "Container",
  rules: {
    canMoveIn: (selectedNode: Node) => {
      return selectedNode.data.displayName === "Column";
    },
  },
  related: {
    settings: ContainerSettings,
  },
  isCanvas: true,
};

Column.craft = {
  name: "Column",
  related: {
    settings: ColumnSettings,
  },
};
