"use client";

import React from "react";
import { Frame, Editor } from "@craftjs/core";
import { ToolbarProvider } from "@/context/toolbar-context";
import EditorHeader from "@/components/editor/header";
import Toolbar from "@/components/editor/toolbar";
import { RenderNode } from "@/components/editor/render-node";
import { Layout } from "@/components/editor/layout";
import { Container } from "@/components/editor/node/container";
import { Text } from "@/components/editor/node/text";
import { Column, ColumnContainer } from "@/components/editor/node/columns";

export default function Viewport() {
  return (
    <div className="verthem-container flex flex-col flex-grow w-full">
      <Editor
        resolver={{ Layout, Container, ColumnContainer, Column, Text }}
        onRender={RenderNode}
      >
        <ToolbarProvider>
          <EditorHeader />
          <div className="flex flex-row w-full h-full overflow-y-clip">
            <div className="flex-1 overflow-y-scroll">
              <div className="p-8 verthem-renderer">
                <Frame>
                  <Layout />
                </Frame>
              </div>
            </div>
            <Toolbar />
          </div>
        </ToolbarProvider>
      </Editor>
    </div>
  );
}
