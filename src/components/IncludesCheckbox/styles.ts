import styled, { css } from 'styled-components';

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;

  font-size: clamp(0.95rem, 1.2vw, 1.15rem);

  cursor: pointer;
`;

export const CheckboxInput = styled.input`
  ${({ theme }) => css`
    pointer-events: none;

    appearance: none;

    min-width: 22px;
    min-height: 22px;

    background: transparent;

    border: 2px solid ${theme.colors.neonGreen};
    border-radius: 2px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    outline: none;

    &:before {
      content: '';

      position: absolute;
      top: 1px;

      width: 5px;
      height: 10px;

      scale: 0;

      background: transparent;

      border: 3px solid ${theme.colors.grey.veryDark};
      border-left: 0;
      border-top: 0;

      transform: rotate(45deg);
    }

    &:checked {
      background: ${theme.colors.neonGreen};
      border-color: ${theme.colors.grey.veryDark};
    }

    &:checked:before {
      scale: 1;
      border-color: ${theme.colors.almostWhite};
    }
  `}
`;
