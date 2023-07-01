import styled, { css } from 'styled-components';

export const WrapperCharacterLength = styled.div``;

type CharacterRangePropTypes = {
  percentfilled: string;
};

export const CharacterRange = styled.input.attrs({
  type: 'range',
})<CharacterRangePropTypes>`
  ${({ theme, percentfilled }) => css`
    -webkit-appearance: none;

    width: 100%;
    height: 8px;

    border-radius: 5px;

    background: ${theme.colors.grey.veryDark};
    background-image: ${`linear-gradient(${theme.colors.neonGreen}, ${theme.colors.neonGreen})`};
    background-size: ${percentfilled};
    background-repeat: no-repeat;

    &::-webkit-slider-runnable-track {
      cursor: pointer;

      height: 8px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;

      position: relative;
      bottom: 10px;

      width: 28px;
      height: 28px;

      border-radius: 50%;
      border: 2px solid transparent;

      background: ${theme.colors.grey.almostWhite};

      cursor: pointer;

      transition: 0.1s;
    }

    &:hover {
      &::-webkit-slider-thumb {
        background: ${theme.colors.grey.veryDark};
        border-color: ${theme.colors.neonGreen};
      }
    }
  `}
`;

export const WrapperCharacterLengthNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 25px;
`;

export const CharacterLengthText = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const CharacterLengthNumber = styled.p`
  ${({ theme }) => css`
    font-size: 32px;
    font-weight: 700;
    color: ${theme.colors.neonGreen};
  `}
`;
