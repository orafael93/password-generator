import { styled, createGlobalStyle, css } from 'styled-components';

export const AppName = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-weight: bold;
    font-size: 24px;

    color: ${theme.colors.grey.grey};
  `}
`;

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body {
      background: ${theme.colors.background};

      color: ${theme.colors.grey.almostWhite};

      font-family: 'JetBrains Mono', monospace;
    }
  `} 
`;
