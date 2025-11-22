import styled, { css } from 'styled-components';

export const WrapperPasswordField = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 20px;
    gap: 10px;

    background: ${theme.colors.grey.dark};

    margin-top: 30px;

    padding: 20px 32px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `}
`;

export const PasswordContent = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grey.grey};
    font-size: max(1.3rem, 2vw);

    letter-spacing: 1px;
  `}
`;

export const WrapperCopyIcon = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;
