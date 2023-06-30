import { createContext } from 'react';

type GlobalContext = {
  characterLength: number;
  onUpdateCharacterLength: (characterLengthToUpdate: number) => void;
};

export const GlobalContext = createContext<GlobalContext>({} as GlobalContext);
