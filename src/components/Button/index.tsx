import { ReactNode, useState } from 'react';

import { ReactComponent as ArrowHover } from '../../assets/images/generate-password-arrow-hover.svg';
import { ReactComponent as ArrowIdle } from '../../assets/images/generate-password-arrow-idle.svg';

import * as S from './styles';

const Button = ({ children }: { children: ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <S.Wrapper>
      <S.Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        {isHovered ? <ArrowHover /> : <ArrowIdle />}
      </S.Button>
    </S.Wrapper>
  );
};

export default Button;
