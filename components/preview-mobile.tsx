"use client"

import { useState } from "react"
import { Eye, EyeOff, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./ui/sidebar"
import Image from "next/image"

interface PreviewProps {
  links: Array<{
    id: string
    title: string
    url: string
    active: boolean
    image?: string
  }>
}

export function PreviewMobile({ links }: PreviewProps) {
  const [isOpen, setIsOpen] = useState(true)
  const { isMobile } = useSidebar()

  return (
    <div className="hidden lg:block lg:w-[400px] relative">
      <div
        className={cn(
          "fixed top-0 right-0 w-[400px] h-screen bg-white border-l transition-transform duration-300",
          isMobile && "hidden"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Preview Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">Preview</h3>

          </div>

          {/* Preview Content */}
          <div className="flex-1 p-4 overflow-hidden">
            <div className="mx-auto max-w-[280px] h-[600px] bg-background rounded-[3rem] border-8 border-muted shadow-2xl overflow-hidden">
              <div className="h-full overflow-y-auto p-4 space-y-3">
                {/* Profile Header */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-muted mb-3" />
                  <h4 className="font-semibold">@username</h4>
                </div>

                {/* Links */}
                {links
                  .filter((link) => link.active)
                  .map((link) => link.image ? <div className="relative w-full pb-[33.33%] bg-gray-400 border-2 rounded-sm ">
                    <Image
                      src={link.image}
                      alt="Preview"
                      layout="fill"
                      objectFit="cover"
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </div> : <a
                    key={link.id}
                    href={link.url}
                    className="block w-full p-3 text-sm text-center rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.title}
                  </a>

                  )}
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

