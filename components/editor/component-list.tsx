import React, { useRef } from "react";
import { useEditor, Element } from "@craftjs/core";
import { Text, TextDefaultProps } from "@/components/editor/node/text";
import {
  Container,
  ContainerDefaultProps,
} from "@/components/editor/node/container";
import { Column, ColumnContainer } from "@/components/editor/node/columns";
import {
  Columns,
  Star,
  Table2,
  Image,
  Type,
  Youtube,
  SquareMousePointer,
  LaptopMinimal,
  GalleryThumbnails,
  Contact,
  MapPinned,
} from "lucide-react";

type Component = {
  icon: React.JSX.Element;
  text: string;
  componentTitle: string;
  component?: JSX.Element;
};

export default function ComponentList() {
  const componentTitles: { [componentTitle: string]: Component[] } = {};

  componentData.forEach((component) => {
    if (!componentTitles[component.componentTitle]) {
      componentTitles[component.componentTitle] = [];
    }
    componentTitles[component.componentTitle].push(component);
  });

  const { connectors } = useEditor();
  const refs = useRef(new Map());

  return (
    <div className="flex flex-col p-6">
      {Object.entries(componentTitles).map(
        ([componentTitle, components], sectionIndex) => (
          <div
            key={componentTitle}
            className={`${sectionIndex !== 0 ? "mt-6" : ""}`}
          >
            <h5 className="font-medium mb-2">{componentTitle}</h5>
            <div className="flex flex-wrap gap-2">
              {components.map((component, index) => (
                <div
                  key={index}
                  ref={(ref) => {
                    if (ref && component.component) {
                      connectors.create(ref, component.component);
                      refs.current.set(index, ref);
                    }
                  }}
                  className="w-[calc(50%-0.3rem)] h-20 flex flex-col items-center justify-center bg-slate-50 border border-slate-200 text-center rounded-xl cursor-grab"
                >
                  {component.icon}
                  <span className="mt-1">{component.text}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  );
}

const componentData = [
  {
    icon: <Table2 />,
    text: "Container",
    componentTitle: "Sections",
    component: <Container {...ContainerDefaultProps} />,
  },
  {
    icon: <Columns />,
    text: "Columns",
    componentTitle: "Sections",
    component: (
      <Element canvas is={ColumnContainer}>
        <Element is={Column}></Element>
      </Element>
    ),
  },
  {
    icon: <Type />,
    text: "Text",
    componentTitle: "Elements",
    component: (
      <Text
        {...TextDefaultProps}
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
    ),
  },
  { icon: <SquareMousePointer />, text: "Button", componentTitle: "Elements" },
  { icon: <Image />, text: "Image", componentTitle: "Elements" },
  { icon: <Star />, text: "Icons", componentTitle: "Elements" },
  { icon: <Youtube />, text: "Video", componentTitle: "Elements" },
  {
    icon: <LaptopMinimal />,
    text: "Cards",
    componentTitle: "Pre-defined Components",
  },
  {
    icon: <GalleryThumbnails />,
    text: "Carousel",
    componentTitle: "Pre-defined Components",
  },
  {
    icon: <Contact />,
    text: "Contact",
    componentTitle: "Pre-defined Components",
  },
  {
    icon: <MapPinned />,
    text: "Maps",
    componentTitle: "Pre-defined Components",
  },
];
