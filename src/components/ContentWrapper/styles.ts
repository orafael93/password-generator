import styled, { css } from 'styled-components';

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.grey.dark};

    padding: 24px 32px;

    @media (max-width: 480px) {
      padding: 24px 12px;
    }

    margin-top: 24px;
  `}
`;
