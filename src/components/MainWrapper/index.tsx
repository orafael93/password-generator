import { ReactNode } from 'react';

import * as S from './styles';

export const MainWrapper = (props: { children: ReactNode }) => (
  <S.Wrapper>
    <S.Content>{props.children}</S.Content>
  </S.Wrapper>
);
