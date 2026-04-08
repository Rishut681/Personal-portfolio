import type { ReactNode } from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Rishu Raj | Cinematic Developer Portfolio",
  description:
    "Creative frontend engineer and full-stack product builder crafting cinematic interfaces, interactive product stories, and premium digital experiences.",
  keywords: [
    "Rishu Raj",
    "frontend developer portfolio",
    "creative developer",
    "GSAP portfolio",
    "Three.js portfolio",
    "freelance frontend engineer",
  ],
  openGraph: {
    title: "Rishu Raj | Cinematic Developer Portfolio",
    description:
      "Creative frontend engineer and full-stack product builder crafting cinematic interfaces, interactive product stories, and premium digital experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishu Raj | Cinematic Developer Portfolio",
    description:
      "Creative frontend engineer and full-stack product builder crafting cinematic interfaces, interactive product stories, and premium digital experiences.",
  },
}

export const viewport: Viewport = {
  themeColor: "#08090d",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorantGaramond.variable} ${manrope.variable}`}>{children}</body>
    </html>
  )
}
