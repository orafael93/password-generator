import styled, { css } from 'styled-components';

export const WrapperCharacterStrength = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${theme.colors.grey.veryDark};
    padding: 30px 25px;

    margin-top: 30px;
  `}
`;

export const StrengthText = styled.p`
  ${({ theme }) => css`
    text-transform: uppercase;

    color: ${theme.colors.grey.grey};

    font-size: 18px;
    font-weight: bold;
  `}
`;

export const WrapperVisualStrength = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const VisualStrengthText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.almostWhite};

    font-size: 24px;
    font-weight: 700;

    text-transform: uppercase;
  `}
`;

export const WrapperVisualStrengthRetangles = styled.div`
  display: flex;
  gap: 7.5px;
`;

type VisualStrengthRetanglesPropTypes = {
  color?: string;
};

export const VisualStrengthRetangles = styled.div<VisualStrengthRetanglesPropTypes>`
  ${({ theme, color }) => css`
    width: 10px;
    height: 28px;

    border: 2px solid ${theme.colors.almostWhite};

    ${color &&
    css`
      border-color: ${color};
      background: ${color};
    `}
  `}
`;
