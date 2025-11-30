import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.grey.dark};

    padding: 24px 32px;
    margin-top: 24px;

    @media (max-width: 480px) {
      padding: 24px 12px;
    }
  `}
`;
