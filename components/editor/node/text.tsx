import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { useToolbar } from "@/context/toolbar-context";
import {
  ColorSettings,
  LayoutSettings,
  SpaceSettings,
  TypographySettings,
} from "@/components/editor/component-settings";

export type TextProps = {
  text: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: string;
  textAlign: "left" | "center" | "right" | "justify";
  letterSpacing: number;
  lineHeight: number;
  textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
};

export const Text = ({
  text,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  letterSpacing,
  lineHeight,
  textTransform,
  ...props
}: TextProps) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
    id,
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
    id: state.id,
  }));

  const { handleToolClick } = useToolbar();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked && selected) {
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
      tabIndex={0}
      onClick={handleClick}
    >
      <ContentEditable
        html={text}
        onChange={(e) =>
          setProp(
            (props: { text: string }) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")),
            500,
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px`, textAlign }}
        className="outline-none"
      />
    </div>
  );
};

export const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    fontFamily,
    fontWeight,
    textAlign,
    letterSpacing,
    lineHeight,
    textTransform,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
    fontFamily: node.data.props.fontFamily,
    fontWeight: node.data.props.fontWeight,
    textAlign: node.data.props.textAlign,
    letterSpacing: node.data.props.letterSpacing,
    lineHeight: node.data.props.lineHeight,
    textTransform: node.data.props.textTransform,
  }));

  return (
    <>
      <LayoutSettings />
      <TypographySettings {...TextDefaultProps} />
      <ColorSettings />
      <SpaceSettings />
    </>
  );
};

export const TextDefaultProps: TextProps = {
  text: "Default Text",
  fontSize: 16,
  textAlign: "left",
  fontFamily: "Inter",
  fontWeight: "Medium",
  letterSpacing: 1.2,
  lineHeight: 1.5,
  textTransform: "none",
};

Text.craft = {
  props: TextDefaultProps,
  related: {
    settings: TextSettings,
  },
};
