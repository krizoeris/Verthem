import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "../ui/input"
import Link from "next/link"

export default function Header() {
  return (
    <div className="flex justify-between items-center h-[60px] pl-3 pr-3 border-b border-border">
      <div>
        <Input placeholder="Search..." className="w-[385px]"/>
      </div>
      <div className="flex items-center gap-3">
        <p>John Doe</p>
        <Link href="/dashboard/profile">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  )
}
