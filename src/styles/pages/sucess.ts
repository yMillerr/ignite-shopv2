'use client'

import styled from 'styled-components'

export const SucessContainer = styled.main`
  max-width: 590px;
  margin: 0 auto;

  text-align: center;

  > img {
    margin: 4rem 0 6.5rem;
  }

  > h2 {
    color: ${(props) => props.theme.colors.gray100};
    font-size: ${(props) => props.theme.fontSizes['2xl']};
    line-height: 2.75rem;

    margin-top: 3rem;
  }

  > p {
    color: ${(props) => props.theme.colors.gray300};
    font-size: ${(props) => props.theme.fontSizes.xl};

    margin: 1.5rem 0 4rem;
  }

  > a {
    text-decoration: none;

    font-size: ${(props) => props.theme.fontSizes.lg};
    color: ${(props) => props.theme.colors.green500};

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.green300};
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 8.75rem;
    height: 8.75rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);

    border-radius: 50%;

    margin-left: -2.5rem;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.8);
  }
`
