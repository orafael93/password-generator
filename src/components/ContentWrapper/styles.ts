import styled, { css } from 'styled-components';

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.grey.dark};

    padding: 24px 32px;

    margin-top: 24px;
  `}
`;
