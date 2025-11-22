import { useGlobalState } from '../../hooks/useGlobalState';
import { useVerifyCharacterLength } from '../../hooks/useVerifyCharacterLength';

import * as S from './styles';

export const CharacterStrength = () => {
  const { characterLength } = useGlobalState();

  const { characterLengthText, visualRetangles } =
    useVerifyCharacterLength(characterLength);

  return (
    <S.WrapperCharacterStrength>
      <S.StrengthText>Strength</S.StrengthText>
      <S.WrapperVisualStrength>
        <S.VisualStrengthText>{characterLengthText}</S.VisualStrengthText>
        <S.WrapperVisualStrengthRetangles>
          {visualRetangles}
        </S.WrapperVisualStrengthRetangles>
      </S.WrapperVisualStrength>
    </S.WrapperCharacterStrength>
  );
};
