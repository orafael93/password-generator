import styled, { css, keyframes } from 'styled-components';

export const PasswordFieldWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 20px;
    align-items: center;
    gap: 10px;

    background: ${theme.colors.grey.dark};

    margin-top: 30px;

    padding: 20px 32px;

    @media (max-width: 480px) {
      padding: 14px 12px;
    }

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `}
`;

type PasswordContentType = {
  copied?: boolean;
};

export const PasswordContent = styled.p<PasswordContentType>`
  ${({ theme, copied }) => css`
    color: ${copied ? theme.colors.grey.almostWhite : theme.colors.grey.grey};
    font-size: clamp(0.9rem, 1.3vw, 1.3rem);

    transition: 0.2s;

    letter-spacing: 1px;
  `}
`;

type CopyIconWrapperType = {
  copied?: boolean;
};

const showCopied = keyframes`
    0% {
      opacity: 0;
      right: 20px;
    }

    50% {
      opacity: 1;
      right: 30px;
    }

    75% {
      opacity: 1;
      right: 30px;
    }

    100% {
      opacity: 0;
      right: 0;
    }
`;

export const CopyIconWrapper = styled.div<CopyIconWrapperType>`
  ${({ theme, copied }) => css`
    display: flex;
    align-items: center;

    position: relative;

    cursor: pointer;

    &:before {
      content: 'Copied';
      display: inline-block;
      position: absolute;
      top: 3px;
      right: 30px;

      opacity: 0;

      color: ${theme.colors.neonGreen};

      ${copied &&
      css`
        animation: ${showCopied} 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      `}

      font-size: clamp(0.9rem, 1.3vw, 1.3rem);
    }

    & svg {
      transition: 1s cubic-bezier(0.175, 0.885, 0.32, 2);
    }

    & svg:hover {
      scale: 1.1;
    }
  `}
`;
