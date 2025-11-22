import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 32px;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    background: ${theme.colors.neonGreen};
    color: ${theme.colors.grey.dark};

    text-transform: uppercase;
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
    font-weight: bold;

    border: 2px solid transparent;

    width: 100%;

    cursor: pointer;

    padding: 20px;

    transition: 0.15s;

    &:hover {
      background: ${theme.colors.grey.dark};
      color: ${theme.colors.neonGreen};
      border-color: ${theme.colors.neonGreen};
    }

    &:disabled {
      cursor: not-allowed;
      background: #817d92;
    }

    &:disabled:hover {
      border-color: #817d92;
      color: ${theme.colors.grey.dark};
    }
  `}
`;
