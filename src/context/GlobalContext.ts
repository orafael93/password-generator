import { createContext } from 'react';

type GlobalContext = {
  characterLength: number;
  onUpdateCharacterLength: (param: number) => void;
  specialCharacters: string[];
  onUpdateSpecialCharacters: (param: string) => void;
  generatedPassword: string;
  onGeneratePassword: () => void;
  passwordElementRef: React.MutableRefObject<HTMLParagraphElement | null>;
};

export const GlobalContext = createContext<GlobalContext>({} as GlobalContext);
