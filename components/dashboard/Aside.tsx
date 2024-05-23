import React from "react"
import Image from "next/image"
import Link from "next/link"

// Import Types
import { MenuItem } from "@/app/types/definitions";

// Import Components
import MenuList from "@/components/dashboard/menu/MenuList";

// Import Lucide Icons
import { 
  Home, 
  LayoutTemplate, 
  MousePointerClick, 
  Anchor, 
  Settings, 
  LogOut 
} from "lucide-react";

// Declare Icons for mapping
const iconMapping = {
  Home,
  LayoutTemplate,
  MousePointerClick,
  Anchor,
  Settings
};

export default function Aside() {
  // Menu List
  const menuList: MenuItem[] = [
    {
      title: "Dashboard",
      icon: "Home",
      link: "/dashboard"
    },
    {
      title: "Pages",
      icon: "LayoutTemplate",
      link: "/dashboard/campaigns"
    },
    {
      title: "Integration",
      icon: "MousePointerClick",
      link: "/dashboard/integration"
    },
    {
      title: "Domains",
      icon: "Anchor",
      link: "/dashboard/domains"
    },
    {
      title: "Settings",
      icon: "Settings",
      link: "/dashboard/settings"
    },
  ];

  return (
    <div className="flex flex-col justify-between pt-8 pb-8 pl-4 pr-4 max-w-[100px] w-[100px] bg-slate-900 text-white">
      <div className="flex justify-center items-center">
        <Link href="/dashboard">
          <Image 
            src="/images/logo.png" 
            width={32} height={32} 
            alt="logo" />
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <MenuList menuList={menuList} iconMapping={iconMapping} />
      </div>

      <div>
        <Link href="/logout" className="flex items-center justify-center text-accent-100 hover:text-accent-75 hover:transition-all">
          <div className="w-[24px] h-[24px]">
            <LogOut className="w-6 h-6" />
          </div>
        </Link>
      </div>
    </div>
  )
}
