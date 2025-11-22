import { ReactNode, useRef, useState } from 'react';

import { GlobalContext } from './GlobalContext';
import { lowercase, upperCase, numbers, symbols } from '@/consts/characters';

type GlobalProviderPropTypes = {
  children: ReactNode;
};

export const GlobalProvider = ({ children }: GlobalProviderPropTypes) => {
  const [characterLength, setCharacterLength] = useState(10);
  const [specialCharacters, setSpecialCharacters] = useState<string[]>([]);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const passwordElementRef = useRef<HTMLParagraphElement | null>(null);

  const onUpdateCharacterLength = (characterLengthToUpdate: number) => {
    setCharacterLength(characterLengthToUpdate);
  };

  const onUpdateSpecialCharacters = (param: string) => {
    const characterAlreadyAdded = specialCharacters.includes(param);

    setSpecialCharacters((currentSpecialCharacters) =>
      characterAlreadyAdded
        ? currentSpecialCharacters.filter(
            (currentSpecialCharacter) => currentSpecialCharacter !== param,
          )
        : [...currentSpecialCharacters, param],
    );
  };

  const onGeneratePassword = () => {
    const allCharacters: string[] = [];
    const emptyArray = Array.from({ length: characterLength });
    const password: string[] = [];

    if (specialCharacters.includes('lowercase')) {
      allCharacters.push(...lowercase);
    }

    if (specialCharacters.includes('uppercase')) {
      allCharacters.push(...upperCase);
    }

    if (specialCharacters.includes('numbers')) {
      allCharacters.push(...numbers);
    }

    if (specialCharacters.includes('symbols')) {
      allCharacters.push(...symbols);
    }

    const getRandomCharacter = () =>
      Math.round(
        Math.random() *
          (allCharacters.length - 1 < 0 ? 0 : allCharacters.length - 1),
      );

    emptyArray.forEach(() =>
      password.push(allCharacters[getRandomCharacter()]),
    );

    setGeneratedPassword(password.join(''));
  };

  const states = {
    characterLength,
    onUpdateCharacterLength,
    specialCharacters,
    onUpdateSpecialCharacters,
    generatedPassword,
    onGeneratePassword,
    passwordElementRef,
  };

  return (
    <GlobalContext.Provider value={states}>{children}</GlobalContext.Provider>
  );
};
