'use client'

import styled from 'styled-components'

export const ProductContainer = styled.div`
  max-width: 1168px;
  height: 656px;

  margin: 2rem auto 7.5rem;
  padding: 1rem;

  display: flex;
  gap: 4.5rem;

  > div {
    max-width: 576px;
    height: 100%;
    width: 100%;

    background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);

    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  > main {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: ${(props) => props.theme.fontSizes['2xl']};
      color: ${(props) => props.theme.colors.gray300};
      font-weight: 700;
      line-height: 2.75rem;
    }

    span {
      display: block;

      color: ${(props) => props.theme.colors.green300};
      line-height: 2.75rem;
      font-size: ${(props) => props.theme.fontSizes['2xl']};

      margin: 1rem 0 2.5rem;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      height: 100%;

      p {
        font-size: ${(props) => props.theme.fontSizes.md};
        color: ${(props) => props.theme.colors.gray300};
        line-height: 1.75rem;
      }
    }
  }
`
