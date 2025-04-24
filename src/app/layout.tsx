// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Synchronicity Chat',
  description: 'A real-time Discord-style chat platform built with Next.js and TypeScript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white font-sans">
        {children}
      </body>
    </html>
  )
}
