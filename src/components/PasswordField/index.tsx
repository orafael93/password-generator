import { useGlobalState } from '@/hooks/useGlobalState';
import { ReactComponent as CopyIcon } from '../../assets/images/icon-copy.svg';

import * as S from './styles';

export const PasswordField = () => {
  const { generatedPassword } = useGlobalState();

  return (
    <S.WrapperPasswordField>
      <S.PasswordContent>{generatedPassword || 'P4$5W0rD!'}</S.PasswordContent>
      <S.WrapperCopyIcon>
        <CopyIcon />
      </S.WrapperCopyIcon>
    </S.WrapperPasswordField>
  );
};
