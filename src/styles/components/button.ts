import styled from 'styled-components'

interface ButtonStylesProps {
  varient: 'in' | 'out'
}

export const ButtonContainer = styled.button<ButtonStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  background-color: ${(props) =>
    props.varient === 'out'
      ? props.theme.colors.green300
      : props.theme.colors.red100};

  border: none;
  border-radius: 8px;

  padding: 1.25rem;

  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: bold;

  cursor: pointer;

  &:not(:disabled):hover {
    background-color: ${(props) =>
      props.varient === 'out'
        ? props.theme.colors.green300
        : props.theme.colors.red300};
  }

  &:disabled {
    opacity: 0.6;
  }
`
