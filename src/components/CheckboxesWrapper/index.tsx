import { checkboxes } from '@/consts/checkboxes';

import { useGlobalState } from '@/hooks/useGlobalState';
import { IncludesCheckbox } from '@/components/IncludesCheckbox';

import { CheckboxTypesWrapper } from './types';

import * as S from './styles';

export const CheckboxesWrapper = () => {
  const { onUpdateSpecialCharacters } = useGlobalState();

  const handleCharacterCheckbox = (param: CheckboxTypesWrapper) => {
    onUpdateSpecialCharacters(param.id);
  };

  return (
    <S.Wrapper>
      {checkboxes.map(({ label, id }) => (
        <IncludesCheckbox
          key={id}
          label={label}
          id={id}
          onHandleCharacterCheckbox={handleCharacterCheckbox}
        />
      ))}
    </S.Wrapper>
  );
};
