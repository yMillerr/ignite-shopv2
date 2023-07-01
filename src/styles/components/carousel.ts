import styled from 'styled-components'

export const CarouselContainer = styled.div``

export const Product = styled.div`
  max-width: 696px;
  width: 100%;
  height: 656px;

  background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  cursor: pointer;

  &:hover {
    footer {
      transition: all 0.3s;
      opacity: 1;
      transform: translateX(0);
    }
  }

  > footer {
    position: absolute;

    left: 4px;
    right: 4px;
    bottom: 4px;

    background: rgba(32, 32, 36, 0.9);

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.25rem;

    border-radius: 6px;

    opacity: 0;
    transform: translateX(-110%);

    > div {
      display: flex;
      flex-direction: column;
      gap: 4px;

      h3 {
        color: ${(props) => props.theme.colors.gray100};
        font-size: ${(props) => props.theme.fontSizes.lg};
        line-height: 2rem;
      }

      strong {
        color: ${(props) => props.theme.colors.green500};
        font-size: ${(props) => props.theme.fontSizes.xl};
        align-self: flex-start;
      }
    }

    button {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`

interface CarouselButtonProps {
  varient?: 'in' | 'out'
}

export const Button = styled.button<CarouselButtonProps>`
  background-color: ${(props) =>
    props.varient === 'out'
      ? props.theme.colors.green300
      : props.theme.colors.red100};

  border-radius: 12px;
  border: none;

  padding: 0.75rem;

  cursor: pointer;

  &:not(:disabled):hover {
    background-color: ${(props) =>
      props.varient === 'out'
        ? props.theme.colors.green300
        : props.theme.colors.red300};
  }
`
