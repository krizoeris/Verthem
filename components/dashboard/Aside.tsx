import React from "react"
import Image from "next/image"
import Link from "next/link"

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

// Declare Type for menu list
type MenuItem = {
  title: string;
  icon: keyof typeof iconMapping;
  link: string;
};

export default function Aside() {

  // Object for menu
  const menuList: MenuItem[] = [
    {
      title: "Dashboard",
      icon: "Home",
      link: "/dashboard"
    },
    {
      title: "Pages",
      icon: "LayoutTemplate",
      link: "/pages"
    },
    {
      title: "Integration",
      icon: "MousePointerClick",
      link: "/integration"
    },
    {
      title: "Domains",
      icon: "Anchor",
      link: "/domains"
    },
    {
      title: "Settings",
      icon: "Settings",
      link: "/settings"
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
        <ul className="flex flex-col gap-4">
          {menuList.map((menu, index) => {
            const Icon = iconMapping[menu.icon];
            return (
              <li key={index} className="w-[64px] group pt-1 pb-1 hover:bg-slate-100 hover:transition-all hover:ease-in rounded-md">
                <Link href={menu.link}>
                  <div className="flex flex-col items-center justify-center gap-2 group-hover:text-slate-900 group-hover:transition-all group-hover:ease-in">
                    <Icon className="w-6 h-6" />
                    <p className="text-sm">{menu.title}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
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
