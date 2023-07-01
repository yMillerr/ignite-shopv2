'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { Header } from './Header'

export function LayoutProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <>
      {pathname !== '/sucess' && <Header />}
      {children}
    </>
  )
}
