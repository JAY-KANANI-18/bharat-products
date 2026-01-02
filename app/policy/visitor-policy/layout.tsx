import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Visitor Policy | Bharat Products',
  description:
    'Guidelines for visitors to Bharat Products premises: registration, identification, PPE, movement rules and responsibilities.',
  alternates: { canonical: '/policy/visitor-policy' },
}

export default function VisitorPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
