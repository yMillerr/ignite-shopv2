'use client'

import styled from 'styled-components'

export const ProductSkeletonContainer = styled.div`
  margin: 2rem auto;

  max-width: 1168px;
  height: 656px;
`

export const SkeletonBox = styled.main`
  display: flex;
  gap: 4.5rem;

  height: 100%;

  > div {
    width: 576px;
    height: 656px;

    background-color: ${(props) => props.theme.colors.gray800};

    border-radius: 0.5rem;
  }

  > footer {
    max-width: 520px;
    width: 100%;

    div {
      background-color: ${(props) => props.theme.colors.gray800};

      height: 45px;

      border-radius: 0.5rem;
    }

    > div:nth-child(2) {
      width: 124px;

      margin: 1rem 0 2.5rem;
    }

    > section {
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 19.375rem;

      > div:first-child {
        height: 130px;
      }

      > div:last-child {
        height: 70px;
      }
    }
  }
`
