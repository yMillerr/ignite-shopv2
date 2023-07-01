import styled, { css } from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'

interface TriggerProps {
  cartlength: number
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1168px;
  width: 100%;
  margin: 2.5rem auto 2rem;
`

export const Trigger = styled(Dialog.Trigger)<TriggerProps>`
  position: relative;

  padding: 0.75rem;

  background-color: ${(props) => props.theme.colors.gray800};

  border: none;
  border-radius: 8px;

  cursor: pointer;

  span {
    position: absolute;
    top: -5px;
    right: -5px;

    background-color: ${(props) => props.theme.colors.green300};

    border-radius: 50%;

    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: bold;
    color: ${(props) => props.theme.colors.gray100};

    visibility: hidden;
  }

  ${(props) =>
    props.cartlength >= 1 &&
    css`
      &::before {
        content: '';

        width: 30px;
        height: 30px;

        background-color: ${(props) => props.theme.colors.gray900};

        border-radius: 50%;

        position: absolute;
        top: -10px;
        right: -10px;
      }

      span {
        visibility: visible;
      }
    `}
`

export const Content = styled(Dialog.Content)`
  min-height: 100vh;
  max-width: 480px;
  width: 90vw;

  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;

  background-color: ${(props) => props.theme.colors.gray800};

  padding: 4.5rem 3rem 3rem;

  &[data-state='open'] {
    box-shadow: -30px 0 100px black;
  }
`

export const Close = styled(Dialog.Close)`
  position: fixed;
  top: 24px;
  right: 24px;

  background: none;
  border: none;

  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`
export const Title = styled(Dialog.Title)`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.gray100};
  line-height: 2rem;
`

export const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  > div {
    width: 100px;
    height: 100px;

    border-radius: 8px;

    background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
  }

  > section {
    h4 {
      color: ${(props) => props.theme.colors.gray300};
      font-weight: 400;
      line-height: 2rem;
      font-size: ${(props) => props.theme.fontSizes.md};
    }

    strong {
      display: block;

      color: ${(props) => props.theme.colors.gray100};
      line-height: 2rem;
      font-size: ${(props) => props.theme.fontSizes.md};
    }

    button {
      border: none;
      background: none;

      color: ${(props) => props.theme.colors.green500};
      font-weight: 700;
      font-size: ${(props) => props.theme.fontSizes.sm};

      margin-top: 0.5rem;

      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.colors.green300};
      }
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 80vh;

  padding-bottom: 2rem;

  > main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding: 2rem 0;

    overflow-y: auto;

    &::-webkit-scrollbar {
      display: inline-block;
      width: 3px;

      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.colors.gray900};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.green300};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${(props) => props.theme.colors.green500};
    }
  }

  > footer {
    > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0 11.875rem;

      margin-bottom: 3.5rem;

      color: ${(props) => props.theme.colors.gray100};

      > p {
        font-size: ${(props) => props.theme.fontSizes.sm};
        line-height: 1.625rem;
      }

      > span {
        font-size: ${(props) => props.theme.fontSizes.sm};
        line-height: 1.875rem;
        color: ${(props) => props.theme.colors.gray300};
      }

      > strong {
        font-size: ${(props) => props.theme.fontSizes.md};
        line-height: 1.875rem;
      }

      h3 {
        font-size: ${(props) => props.theme.fontSizes.lg};
        line-height: 2rem;
      }
    }
  }
`
