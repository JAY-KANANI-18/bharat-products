import type { Metadata } from 'next'
import React from 'react'
import '../src/globals.css'

export const metadata: Metadata = {
  title: 'Amwerk Berlin',
  description: 'Professional services website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-black/70 text-sm not-italic normal-nums font-normal accent-auto bg-fixed bg-white bg-no-repeat bg-cover box-border caret-transparent block tracking-[normal] leading-[21px] list-outside list-disc min-h-[1000px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sanchez md:text-base md:leading-6">
        {children}
      </body>
    </html>
  )
}
