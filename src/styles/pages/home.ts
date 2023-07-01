'use client'
import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: calc(100vw - ((100vw - 1180px) / 2));
  width: 100%;
  min-height: 100vh;

  margin-left: auto;

  > div {
    display: flex;
    align-items: center;
  }
`
