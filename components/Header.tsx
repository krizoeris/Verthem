import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from './ui/input'

export default function Header() {
  return (
    <div className="flex justify-between items-center h-14 pl-3 pr-3 border-b border-border">
      <div>
        <Input placeholder="Search landing page"/>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-sm">John Doe</p>
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
