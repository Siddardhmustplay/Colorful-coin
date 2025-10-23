import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import AnimatedBackground from "@/components/AnimatedBackground"

export const metadata: Metadata = {
  title: "Colorful Coin",
  description: "Spin the light. Feel the spectrum.",
  generator: "v0.app",
  icons: {
    icon: "/color-coin.png",        // ✅ favicon for browser tab
    shortcut: "/color-coin.png",
    apple: "/color-coin.png",       // ✅ icon for Apple devices
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-transparent antialiased">
        {/* Background lives once at the root */}
        <AnimatedBackground />
        {/* Foreground container */}
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  )
}
