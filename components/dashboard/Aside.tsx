'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'

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
  // Pass pathname to MenuListProps
  const pathName = usePathname();
  
  // Menu List
  const menuList: MenuItem[] = [
    {
      title: "Dashboard",
      icon: "Home",
      link: "/dashboard"
    },
    {
      title: "Campaigns",
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
    <div className="flex flex-col justify-between pt-8 pb-8 pl-3 pr-3 max-w-[100px] w-[100px] bg-slate-900 text-neutral-50">
      <div className="flex justify-center items-center">
        <Link href="/dashboard">
          <Image 
            src="/images/logo.png" 
            width={32} height={32} 
            alt="logo" />
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <MenuList menuList={menuList} iconMapping={iconMapping} pathName={pathName} />
      </div>

      <div>
        <Link href="/logout" className="flex items-center justify-center text-verthem-900 hover:text-verthem-700 hover:transition-all">
          <div className="w-[24px] h-[24px]">
            <LogOut className="w-6 h-6" />
          </div>
        </Link>
      </div>
    </div>
  )
}
