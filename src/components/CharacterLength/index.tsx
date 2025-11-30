import { useState } from 'react';

import { useGlobalState } from '@/hooks/useGlobalState';

import * as S from './styles';

export const CharacterLength = () => {
  const { characterLength, onUpdateCharacterLength } = useGlobalState();

  const [backgroundSize, setBackgroundSize] = useState('50% 100%');

  const handleInputChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = param;

    const minValue = Number(target.min);
    const maxValue = Number(target.max);
    const currentValue = Number(target.value);

    onUpdateCharacterLength(currentValue);

    setBackgroundSize(
      `${((currentValue - minValue) * 100) / (maxValue - minValue)}% 100%`,
    );
  };

  return (
    <S.WrapperCharacterLength>
      <S.WrapperCharacterLengthNumber>
        <S.CharacterLengthText>Characters Length</S.CharacterLengthText>
        <S.CharacterLengthNumber>{characterLength}</S.CharacterLengthNumber>
      </S.WrapperCharacterLengthNumber>
      <S.CharacterRange
        min={0}
        max={20}
        value={characterLength}
        onChange={handleInputChange}
        percentfilled={backgroundSize}
      />
    </S.WrapperCharacterLength>
  );
};
