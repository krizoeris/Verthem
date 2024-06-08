import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import Components
import MenuList from "@/components/dashboard/menu/MenuList";
import { LogoutButton } from "@/components/auth/Buttons";

export default function Aside() {
  // Menu List
  const menuList: Global.Menu.MenuItem[] = [
    {
      title: "Dashboard",
      icon: "Home",
      link: "/dashboard",
    },
    {
      title: "Campaigns",
      icon: "LayoutTemplate",
      link: "/campaigns",
    },
    {
      title: "Integration",
      icon: "MousePointerClick",
      link: "/integration",
    },
    {
      title: "Domains",
      icon: "Anchor",
      link: "/domains",
    },
    {
      title: "Settings",
      icon: "Settings",
      link: "/settings",
    },
  ];

  return (
    <div className="flex flex-col justify-between pt-8 pb-8 pl-3 pr-3 max-w-[100px] w-[100px] bg-slate-900 text-neutral-50">
      <div className="flex justify-center items-center">
        <Link href="/dashboard">
          <Image src="/images/logo.png" width={32} height={32} alt="logo" />
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <MenuList menuList={menuList} />
      </div>

      <div>
        <LogoutButton />
      </div>
    </div>
  );
}
