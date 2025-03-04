import type React from "react"
import "@/app/globals.css"
import { Space_Grotesk } from "next/font/google"
import type { Metadata } from "next"
import { cn } from "@/lib/utils"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "$KNYE Clicker - Kanye West TON Mining Game",
  description: "Mine $KNYE coins on the TON network with this Kanye West themed clicker game",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body className={cn(spaceGrotesk.className, "bg-black text-white")}>{children}</body>
    </html>
  )
}



import './globals.css'