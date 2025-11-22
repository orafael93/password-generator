import { useState } from 'react';

import { useGlobalState } from '@/hooks/useGlobalState';
import { ReactComponent as CopyIcon } from '@/assets/images/icon-copy.svg';

import * as S from './styles';

export const PasswordField = () => {
  const { generatedPassword, passwordElementRef } = useGlobalState();
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCopy = async () => {
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
    <S.WrapperPasswordField>
      <S.PasswordContent ref={passwordElementRef}>
        {generatedPassword || 'P4$5W0rD!'}
      </S.PasswordContent>
      <S.CopyIconWrapper
        copied={copied}
        onClick={() => {
          if (!isAnimating) {
            handleCopy();
          }
        }}
      >
        <CopyIcon />
      </S.CopyIconWrapper>
    </S.WrapperPasswordField>
  );
};
