import { styled, createGlobalStyle, css } from 'styled-components';

export const AppName = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-weight: bold;
    font-size: clamp(1.5rem, 4.5vw, 2.5rem);

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
      width: 100%;
      height: 100%;

      background: ${theme.colors.background};

      color: ${theme.colors.grey.almostWhite};

      font-family: 'JetBrains Mono', monospace;
    }

    #root {
      width: 100%;
      height: 100%;
    }
  `} 
`;
