import { useState } from 'react';

import { useGlobalState } from '@/hooks/useGlobalState';
import { ReactComponent as CopyIcon } from '@/assets/images/icon-copy.svg';

import * as S from './styles';

export const PasswordField = () => {
  const { generatedPassword, passwordElementRef } = useGlobalState();

  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const onCopyPassword = async () => {
    const generatedPassword =
      (passwordElementRef && passwordElementRef.current?.textContent) || '';

    try {
      await navigator.clipboard.writeText(generatedPassword);

      setCopied(true);
      setIsAnimating(true);

      setTimeout(() => {
        setCopied(false);
        setIsAnimating(false);
      }, 1900);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <S.PasswordFieldWrapper>
      <S.PasswordContent copied={copied || undefined} ref={passwordElementRef}>
        {generatedPassword || 'P4$5W0rD!'}
      </S.PasswordContent>
      <S.CopyIconWrapper
        copied={copied || undefined}
        onClick={() => {
          if (!isAnimating) {
            onCopyPassword();
          }
        }}
      >
        <CopyIcon />
      </S.CopyIconWrapper>
    </S.PasswordFieldWrapper>
  );
};
