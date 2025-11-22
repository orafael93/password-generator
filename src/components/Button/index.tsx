import { ReactNode, useState } from 'react';

import { ReactComponent as ArrowHover } from '../../assets/images/generate-password-arrow-hover.svg';
import { ReactComponent as ArrowIdle } from '../../assets/images/generate-password-arrow-idle.svg';
import { useGlobalState } from '@/hooks/useGlobalState';

import * as S from './styles';

export const Button = ({ children }: { children: ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { onGeneratePassword, specialCharacters, characterLength } =
    useGlobalState();

  return (
    <S.Wrapper>
      <S.Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onGeneratePassword}
        disabled={!specialCharacters.length || characterLength < 1}
      >
        {children}
        {isHovered ? <ArrowHover /> : <ArrowIdle />}
      </S.Button>
    </S.Wrapper>
  );
};
