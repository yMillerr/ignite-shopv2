'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

export const defaultTheme = {
  colors: {
    white: '#fff',
    gray900: '#121214',
    gray800: '#202024',
    gray300: '#c4c4cc',
    gray100: '#e1e1e6',

    green500: '#00875f',
    green300: '#00b37e',

    red100: '#9e160b',
    red300: '#730b05',
  },

  fontSizes: {
    sm: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
  },
}

export function ProviderTheme({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}
