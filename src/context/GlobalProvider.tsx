import { ReactNode, useState } from 'react';

import { GlobalContext } from './GlobalContext';

type GlobalProviderPropTypes = {
  children: ReactNode;
};

export const GlobalProvider = ({ children }: GlobalProviderPropTypes) => {
  const [characterLength, setCharacterLength] = useState(10);

  const onUpdateCharacterLength = (characterLengthToUpdate: number) => {
    setCharacterLength(characterLengthToUpdate);
  };

  const states = {
    characterLength,
    onUpdateCharacterLength,
  };

  return (
    <GlobalContext.Provider value={states}>{children}</GlobalContext.Provider>
  );
};
