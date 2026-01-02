import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Infrastructure & Capabilities | Bharat Products',
  description:
    'Explore Bharat Products infrastructure: ~100K sq ft manufacturing, 170+ machining centers, and comprehensive process envelopes for turning, milling, and forging.',
  alternates: { canonical: '/infrastructure' },
}

export default function InfrastructureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
