import { useContext } from 'react';

import { GlobalContext } from '@/context/GlobalContext';

export const useGlobalState = () => {
  const globalContext = useContext(GlobalContext);

  if (!globalContext) {
    throw new Error('useGlobalState must be within a GlobalProvider');
  }

  return globalContext;
};
