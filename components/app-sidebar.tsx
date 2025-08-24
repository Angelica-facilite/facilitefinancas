"use client";
import * as React from "react"
import { Link as Links, Mail } from "lucide-react";

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import Image from "next/image";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      name: "Links",
      url: "links",
      icon: Links,
    },
    {
      name: "E-mails",
      url: "emails",
      icon: Mail,
    },

  ],
}


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="  bg-[#fc6103]">
      <SidebarHeader className=" bg-[#1c252e] ">
        <div className="bg-white rounded-lg">

          <Image alt="logo"
            width={500}
            height={100}
            src="/logo.png"
            sizes="h-20 w-full"
          />
        </div>
      </SidebarHeader>
      <SidebarContent className=" bg-[#1c252e] text-white">
        <NavMain projects={data.navMain} />
      </SidebarContent>
      <SidebarFooter className=" bg-[#1c252e] text-white">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
