import React, { ReactNode, useState } from "react";
import { useNode } from "@craftjs/core";
import { useToolbar } from "@/context/toolbar-context";
import {
  ColorSettings,
  LayoutSettings,
  SizeSettings,
  SpaceSettings,
} from "@/components/editor/component-settings";

export type ContainerProps = {
  background?: string;
  padding?: number;
  children?: ReactNode;
  className?: string;
};

export const Container = ({
  background,
  padding,
  children,
  className,
  ...props
}: ContainerProps) => {
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
      className="p-4 m-0 w-full"
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

export const ContainerSettings = () => {
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

export const ContainerDefaultProps: ContainerProps = {
  background: "#ffffff",
  padding: 16,
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
  isCanvas: true,
};
