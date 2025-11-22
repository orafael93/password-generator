import { createContext } from 'react';

type GlobalContext = {
  characterLength: number;
  onUpdateCharacterLength: (param: number) => void;
  specialCharacters: string[];
  onUpdateSpecialCharacters: (param: string) => void;
  generatedPassword: string;
  onGeneratePassword: () => void;
};

export const GlobalContext = createContext<GlobalContext>({} as GlobalContext);
