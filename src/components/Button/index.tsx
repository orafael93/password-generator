import { ReactNode, useState } from 'react';

import { useGlobalState } from '@/hooks/useGlobalState';
import { ReactComponent as ArrowHover } from '@/assets/images/generate-password-arrow-hover.svg';
import { ReactComponent as ArrowIdle } from '@/assets/images/generate-password-arrow-idle.svg';

import * as S from './styles';

export const Button = (props: { children: ReactNode }) => {
  const { children } = props;

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
