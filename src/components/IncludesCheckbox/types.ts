export type IncludesCheckboxPropTypes = {
  id: string;
  label: string;
  onHandleCharacterCheckbox: (param: {
    id: string;
    isChecked: boolean;
  }) => void;
};
