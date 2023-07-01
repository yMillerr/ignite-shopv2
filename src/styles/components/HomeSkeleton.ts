'use client'

import styled from 'styled-components'

export const HomeSkeletonContainer = styled.div`
  max-width: calc(100vw - ((100vw - 1180px) / 2));
  width: 1440px;
  height: 656px;

  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  overflow-x: hidden;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > main {
    width: 696px;
    height: 600px;

    background-color: ${(props) => props.theme.colors.gray800};

    border-radius: 0.5rem;
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      background-color: ${(props) => props.theme.colors.gray800};
      height: 32px;
      border-radius: 0.8rem;
    }

    > div:nth-child(1) {
      width: 330px;
    }

    > div:nth-child(2) {
      width: 100px;
    }
  }
`
