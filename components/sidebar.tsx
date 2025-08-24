import { cn } from "@/lib/utils"
import { Link as Links, Settings, Mail } from "lucide-react";
import type React from "react" // Import React
import Link from "next/link"
import { NavUser } from "./nav-user"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 min-h-screen bg-[#1c252e] justify-between h-screen flex flex-col", className)}>
      <div className="space-y-4 py-4">
        <NavUser user={{ name: '', email: '', avatar: '' }} />
        {/* LINKS DE NAVEGAÇÃO */}
        <div className="space-y-1 px-2">

          <Link
            href="links"
            className="flex items-center w-full rounded-md p-2 justify-start gap-2 text-gray-400 hover:text-white hover:bg-[#fc6103]"
          >
            <Links className="h-5 w-5" />
            Links
          </Link>
          <Link
            href="emails"
            className="w-full flex rounded-md p-2 items-center justify-start gap-2 text-gray-400 hover:text-white hover:bg-[#fc6103]"
          >
            <Mail className="h-5 w-5" />
            E-mails
          </Link>

        </div>
      </div>
      <div className="px-3 py-2">

        <Link
          href="emails"
          className="w-full flex rounded-md p-2 items-center justify-start gap-2 text-gray-400 hover:text-white hover:bg-[#fc6103]"
        >
          <Settings className="h-5 w-5" />
          Setting
        </Link>

      </div>

    </div>
  )
}

