import React, { ReactNode, useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import {
  AlignCenter,
  AlignCenterVerticalIcon,
  AlignEndHorizontal,
  AlignEndVertical,
  AlignJustify,
  AlignLeft,
  AlignRight,
  AlignStartHorizontal,
  AlignStartVerticalIcon,
  AlignVerticalJustifyCenter,
  CaseLower,
  CaseSensitive,
  CaseUpper,
  ChevronDown,
} from "lucide-react";
import {
  RxDotsHorizontal,
  RxLetterCaseCapitalize,
  RxLetterCaseLowercase,
  RxLetterCaseUppercase,
  RxLetterSpacing,
} from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TextProps } from "@/components/editor/node/text";

const SettingsAccordion = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => (
  <Accordion
    type="single"
    collapsible
    className="w-full px-6"
    defaultValue="component-settings"
  >
    <AccordionItem value="component-settings">
      <AccordionTrigger className="text-sm font-semibold capitalize hover:no-underline text-slate-900">
        {title}
      </AccordionTrigger>
      <AccordionContent className="pt-4 pb-6">{children}</AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const SettingsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen w-full flex-col pb-16">
      <div className="flex flex-1 flex-col overflow-y-scroll">{children}</div>
    </div>
  );
};

// List of all component settings

export const TypographySettings = ({
  text,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  letterSpacing,
  lineHeight,
  textTransform,
}: TextProps) => {
  return (
    <SettingsAccordion title="typography">
      <div className="mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size={"sm"}
              className="flex justify-between w-full bg-white hover:bg-slate-100 text-base text-slate-900"
            >
              {fontFamily}
              <ChevronDown width={16} height={16} className="ml-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full min-w-64">
            <DropdownMenuGroup>
              <DropdownMenuItem className="flex justify-left text-base">
                More Fonts Here
              </DropdownMenuItem>
              <DropdownMenuItem className="flex justify-left text-base">
                More Fonts Here
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-row mb-4 gap-4">
        <div className="w-[calc(50%-0.3rem)]">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size={"sm"}
                className="flex justify-between w-full bg-white hover:bg-slate-100 text-base text-slate-900"
              >
                Medium
                <ChevronDown width={16} height={16} className="ml-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full min-w-36">
              <DropdownMenuGroup>
                <DropdownMenuItem className="flex justify-left text-base">
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-left text-base">
                  Regular
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-left text-base">
                  Medium
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-left text-base">
                  Semi Bold
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-left text-base">
                  Bold
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-left text-base">
                  Extra Bold
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-left text-base">
                  Black
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="w-[calc(50%-0.3rem)]">
          <div className="relative">
            <input
              defaultValue={fontSize}
              className="w-full rounded-md focus-visible:outline outline-verthem-900 border border-slate-200 bg-slate-50 px-8 py-2 h-[36px] text-right text-base leading-6"
              type="text"
              placeholder="0"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-4">
              <span className="text-sm text-slate-400">px</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mb-4 justify-between gap-2">
        <button className="rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-50 p-2 w-1/4 flex items-center justify-center">
          <AlignLeft className="h-4 w-4 stroke-current text-slate-900" />
        </button>
        <button className="rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-50 p-2 w-1/4 flex items-center justify-center">
          <AlignCenter className="h-4 w-4 stroke-current text-slate-900" />
        </button>
        <button className="rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-50 p-2 w-1/4 flex items-center justify-center">
          <AlignRight className="h-4 w-4 stroke-current text-slate-900" />
        </button>
        <button className="rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-50 p-2 w-1/4 flex items-center justify-center">
          <AlignJustify className="h-4 w-4 stroke-current text-slate-900" />
        </button>
      </div>
      <div className="flex flex-row mb-4 gap-4">
        <div className="w-[calc(50%-0.3rem)]">
          <div className="relative">
            <input
              className="w-full rounded-md focus-visible:outline outline-verthem-900 border border-slate-200 bg-slate-50 px-8 py-2 h-[36px] text-right text-base leading-6"
              type="text"
              placeholder="0"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-4">
              <span className="text-sm text-slate-400">px</span>
            </div>
          </div>
        </div>
        <div className="w-[calc(50%-0.3rem)]">
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center px-4">
              <RxLetterSpacing />
            </div>
            <input
              className="w-full rounded-md focus-visible:outline outline-verthem-900 border border-slate-200 bg-slate-50 px-8 py-2 h-[36px] text-right text-base leading-6"
              type="text"
              placeholder="0"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-4">
              <span className="text-sm text-slate-400">%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mb-4 justify-between gap-2">
        <button className="rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-50 p-2 w-1/4 flex items-center justify-center">
          <RxLetterCaseUppercase className="h-4 w-4 stroke-current text-slate-900" />
        </button>
        <button className="rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-50 p-2 w-1/4 flex items-center justify-center">
          <RxLetterCaseLowercase className="h-4 w-4 stroke-current text-slate-900" />
        </button>
        <button className="rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-50 p-2 w-1/4 flex items-center justify-center">
          <RxLetterCaseCapitalize className="h-4 w-4 stroke-current text-slate-900" />
        </button>
        <button className="rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-50 p-2 w-1/4 flex items-center justify-center">
          <RxDotsHorizontal className="h-4 w-4 stroke-current text-slate-900" />
        </button>
      </div>
    </SettingsAccordion>
  );
};

export const LayoutSettings = () => {
  return (
    <SettingsAccordion title="layout">
      <div className="flex items-center justify-between">
        <button className="rounded-md">
          <AlignStartVerticalIcon className="h-5 w-5 stroke-current text-slate-400 hover:text-slate-900 focus-visible:text-slate-900" />
        </button>
        <button className="rounded-md">
          <AlignCenterVerticalIcon className="h-5 w-5 stroke-current text-slate-400 hover:text-slate-900 focus-visible:text-slate-900" />
        </button>
        <button className="rounded-md">
          <AlignEndVertical className="h-5 w-5 stroke-current text-slate-400 hover:text-slate-900 focus-visible:text-slate-900" />
        </button>
        <button className="rounded-md">
          <AlignStartHorizontal className="h-5 w-5 stroke-current text-slate-400 hover:text-slate-900 focus-visible:text-slate-900" />
        </button>
        <button className="rounded-md">
          <AlignVerticalJustifyCenter className="h-5 w-5 stroke-current text-slate-400 hover:text-slate-900 focus-visible:text-slate-900" />
        </button>
        <button className="rounded-md">
          <AlignEndHorizontal className="h-5 w-5 stroke-current text-slate-400 hover:text-slate-900 focus-visible:text-slate-900" />
        </button>
      </div>
    </SettingsAccordion>
  );
};

export const SizeSettings = () => {
  return (
    <SettingsAccordion title="size">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center px-4">
              <span className="text-sm text-slate-400">W</span>
            </div>
            <input
              className="w-full rounded-md focus-visible:outline outline-verthem-900 border right-2 border-slate-200 bg-slate-50 px-8 py-2 h-[36px] text-right text-base leading-6"
              type="text"
              placeholder="0"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-4">
              <span className="text-sm text-slate-400">px</span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center px-4">
              <span className="text-sm text-slate-400">H</span>
            </div>
            <input
              className="w-full rounded-md focus-visible:outline outline-verthem-900 border border-slate-200 bg-slate-50 px-8 py-2 h-[36px] text-right text-base leading-6"
              type="text"
              placeholder="0"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-4">
              <span className="text-sm text-slate-400">px</span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center px-4">
              <span className="text-sm text-slate-400">Min W</span>
            </div>
            <input
              className="w-full rounded-md focus-visible:outline outline-verthem-900 border border-slate-200 bg-slate-50 px-8 py-2 h-[36px] text-right text-base leading-6"
              type="text"
              placeholder="0"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-4">
              <span className="text-sm text-slate-400">px</span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center px-4">
              <span className="text-sm text-slate-400">Max W</span>
            </div>
            <input
              className="w-full rounded-md focus-visible:outline outline-verthem-900 border border-slate-200 bg-slate-50 px-8 py-2 h-[36px] text-right text-base leading-6"
              type="text"
              placeholder="0"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-4">
              <span className="text-sm text-slate-400">px</span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center px-4">
              <span className="text-sm text-slate-400">Max W</span>
            </div>
            <input
              className="w-full rounded-md focus-visible:outline outline-verthem-900 border border-slate-200 bg-slate-50 px-8 py-2 h-[36px] text-right text-base leading-6"
              type="text"
              placeholder="0"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-4">
              <span className="text-sm text-slate-400">px</span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center px-4">
              <span className="text-sm text-slate-400">Max H</span>
            </div>
            <input
              className="w-full rounded-md focus-visible:outline outline-verthem-900 border border-slate-200 bg-slate-50 px-8 py-2 h-[36px] text-right text-base leading-6"
              type="text"
              placeholder="0"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-4">
              <span className="text-sm text-slate-400">px</span>
            </div>
          </div>
        </div>
      </div>
    </SettingsAccordion>
  );
};

export const ColorSettings = () => {
  const [color, setColor] = useState("#52DFFF");
  const [inputColor, setInputColor] = useState(color);

  const handleColorChange = (newColor: React.SetStateAction<string>) => {
    setColor(newColor);
    setInputColor(newColor);
  };

  const handleInputChange = (e: { target: { value: any } }) => {
    const newColor = e.target.value;
    setInputColor(newColor);
    if (
      /^#[0-9A-F]{6}$/i.test(newColor) ||
      /^rgba?\(\s*(\d{1,3}%?\s*,\s*){2}\d{1,3}%?\s*(,\s*\d{1,3}%?\s*)?\)$/i.test(
        newColor,
      ) ||
      /^linear-gradient\(/i.test(newColor)
    ) {
      setColor(newColor);
    }
  };

  return (
    <SettingsAccordion title="color">
      <div className="flex flex-row gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              style={{ background: color }}
              className="w-[36px] h-[36px]"
            ></Button>
          </PopoverTrigger>
          <PopoverContent className="w-full" side="left">
            <ColorPicker value={color} onChange={handleColorChange} />
          </PopoverContent>
        </Popover>
        <input
          value={inputColor}
          onChange={handleInputChange}
          className="rounded-md focus-visible:outline outline-verthem-900 border border-slate-200 bg-slate-50 px-4 py-2 h-[36px] w-full text-left text-sm leading-6"
          type="text"
        />
      </div>
    </SettingsAccordion>
  );
};

export const SpaceSettings = () => {
  return (
    <SettingsAccordion title="spacing">
      <div className="relative flex items-center rounded-xl border-2 border-dashed border-slate-200 py-10 px-12">
        <span className="absolute top-2 left-2 text-[10px] uppercase text-slate-400">
          margin
        </span>
        <span className="absolute bottom-12 right-14 text-[10px] uppercase text-slate-400">
          padding
        </span>
        <div className="relative w-full">
          <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 flex-col items-center gap-2">
            <input
              className="h-4 w-4 text-center text-sm outline-none"
              defaultValue={20}
            />
            <div className="h-2 w-2 border-2 border-verthem-900 bg-white" />
            <input
              className="h-4 w-4 text-center text-sm outline-none"
              defaultValue={0}
            />
          </div>
          <div className="absolute inset-y-0 right-0 flex translate-x-1/2 items-center gap-2">
            <input
              className="h-4 w-4 text-center text-sm outline-none"
              defaultValue={0}
            />
            <div className="h-2 w-2 border-2 border-verthem-900 bg-white" />
            <input
              className="h-4 w-4 text-center text-sm outline-none"
              defaultValue={0}
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 flex-col items-center gap-2">
            <input
              className="h-4 w-4 text-center text-sm outline-none"
              defaultValue={0}
            />
            <div className="h-2 w-2 border-2 border-verthem-900 bg-white" />
            <input
              className="h-4 w-4 text-center text-sm outline-none"
              defaultValue={20}
            />
          </div>
          <div className="absolute inset-y-0 left-0 flex -translate-x-1/2 items-center gap-2">
            <input
              className="h-4 w-4 text-center text-sm outline-none"
              defaultValue={0}
            />
            <div className="h-2 w-2 border-2 border-verthem-900 bg-white" />
            <input
              className="h-4 w-4 text-center text-sm outline-none"
              defaultValue={0}
            />
          </div>
          <div className="h-24 w-full rounded-xl border-2 border-verthem-900 px-10 py-8">
            <div className="h-full w-full rounded bg-slate-200"></div>
          </div>
        </div>
      </div>
    </SettingsAccordion>
  );
};
