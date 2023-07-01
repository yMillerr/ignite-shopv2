import { Roboto } from 'next/font/google'

import { ReactNode } from 'react'

// import { Header } from '@/components/Header'

import { GlobalStyles } from '@/styles/global'
import { ProviderTheme } from '@/styles'
import StyledComponentsRegistry from '@/libs/registry'

import { Metadata } from 'next'
import { CartContextProvider } from '@/context/CartContext'
import { LayoutProvider } from '@/components/LayoutProvider'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Ignite shop v2',
  description:
    'Você gosta de camisetas estilosas? Então o ignite shop é o lugar certo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <ProviderTheme>
          <GlobalStyles />
          <CartContextProvider>
            <LayoutProvider>
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </LayoutProvider>
          </CartContextProvider>
        </ProviderTheme>
      </body>
    </html>
  )
}
