
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jornada da Liberdade Financeira",
  description: "Aprenda como sair das dívidas e conquistar sua liberdade financeira",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
        <body className={inter.className}>
          <main  >
            {children}
          </main>
          <Toaster />
        </body> 
    </html>
  )
}

