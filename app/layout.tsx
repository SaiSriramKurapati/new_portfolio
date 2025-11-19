import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sai Sriram Kurapati | Software Engineer",
  description: "Software Engineer with 5+ years of experience owning architecture, product strategy, and delivery in fast-moving teams.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

