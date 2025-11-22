import { ReactNode } from 'react';

import * as S from './styles';

type MainWrapperPropTypes = {
  children: ReactNode;
};

export const MainWrapper = ({ children }: MainWrapperPropTypes) => (
  <S.Wrapper>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
);
