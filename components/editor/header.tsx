import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Monitor,
  Pencil,
  Redo2,
  Smartphone,
  Undo2,
} from "lucide-react";

export default function EditorHeader() {
  return (
    <div className="flex justify-between items-center h-[60px] py-4 px-4 border-b border-border bg-background">
      <div className="flex items-center gap-4">
        <Button variant={"outline"} className="text-base text-slate-900">
          Exit
        </Button>
        <EditorPageTitle />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant={"outline"}
            className="bg-slate-50 hover:bg-slate-100 text-slate-950 h-10 w-10 px-2"
          >
            <Undo2 width={16} height={16} />
          </Button>
          <Button
            variant={"outline"}
            className="bg-slate-50 hover:bg-slate-100 text-slate-950 h-10 w-10 px-2"
          >
            <Redo2 width={16} height={16} />
          </Button>
        </div>
        <ViewportSelector />
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant={"link"}
          className="text-base text-slate-900/50 hover:text-slate-900"
        >
          Preview Page
        </Button>
        <Button variant={"outline"} className="text-base text-slate-900">
          Save
        </Button>
        <Button
          variant={"default"}
          className="flex gap-2 bg-verthem-900 hover:bg-verthem-700 hover:transition-all text-base text-slate-900"
        >
          Publish
        </Button>
      </div>
    </div>
  );
}

const ViewportSelector = () => {
  const [selectedItem, setSelectedItem] = useState("Desktop");

  const handleItemClick = (item: React.SetStateAction<string>) => {
    setSelectedItem(item);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-slate-50 hover:bg-slate-100 text-base text-slate-900"
        >
          {selectedItem === "Desktop" ? (
            <Monitor width={16} height={16} className="mr-2" />
          ) : (
            <Smartphone width={16} height={16} className="mr-2" />
          )}
          {selectedItem}
          <ChevronDown width={16} height={16} className="ml-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup className="w-36">
          <DropdownMenuItem
            className="flex items-center text-base"
            onClick={() => handleItemClick("Desktop")}
          >
            <Monitor width={16} height={16} className="mr-2" />
            Desktop
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center text-base"
            onClick={() => handleItemClick("Mobile")}
          >
            <Smartphone width={16} height={16} className="mr-2" />
            Mobile
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const EditorPageTitle = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Page Title");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(e.target.value);
  };

  const handleBlur = () => {
    handleSave();
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add additional logic to save the title
  };

  return (
    <div>
      {isEditing ? (
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={title}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="border-b border-dashed focus:outline-none"
          />
        </div>
      ) : (
        <div className="flex items-center gap-2" onClick={handleEdit}>
          {title}
          <Pencil width={16} height={16} />
        </div>
      )}
    </div>
  );
};
