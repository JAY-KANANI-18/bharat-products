import type { Metadata } from 'next'
import React from 'react'
import { Roboto } from 'next/font/google'
import '../src/globals.css'

export const metadata: Metadata = {
  title: 'Amwerk Berlin',
  description: 'Professional services website',
  icons: {
    icon: '/White BG Favicon.png',
    apple: '/logo/Bharat PRoduct Final Logo.png',
  },
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-foreground/70 text-sm not-italic normal-nums font-normal accent-auto bg-fixed bg-white bg-no-repeat bg-cover box-border caret-transparent block tracking-[normal] leading-[21px] list-outside list-disc min-h-[1000px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-roboto md:text-base md:leading-6`}>
        {children}
      </body>
    </html>
  )
}

