'use client'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.gray900};
    
    color: ${(props) => props.theme.colors.gray100};
    -webkit-font-smoothing: antialiased;
  }
`
