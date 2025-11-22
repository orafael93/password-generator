import { useState } from 'react';

import { IncludesCheckboxPropTypes } from './types';

import * as S from './styles';

export const IncludesCheckbox = (props: IncludesCheckboxPropTypes) => {
  const { label, id, onHandleCharacterCheckbox } = props;

  const [checked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked((oldState) => !oldState);
    onHandleCharacterCheckbox({ id, isChecked: !checked });
  };

  return (
    <S.Wrapper>
      <S.CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={handleCheckbox}
        readOnly
      />
      {label}
    </S.Wrapper>
  );
};
