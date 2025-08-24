"use client"


import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils"


import { type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation"


export function NavMain({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}) {
  const path = usePathname().replace('/', '')
  return (
    <SidebarGroup  >
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name} >
            <SidebarMenuButton asChild className={cn("hover:bg-[#fc6103] hover:text-white", item.url === path ? 'bg-[#fc6103]' : "")}>
              <a href={item.url}>
                {item.icon && <item.icon />}
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}

      </SidebarMenu>
    </SidebarGroup>
  )
}
