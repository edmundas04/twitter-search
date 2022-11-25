const getInputLabel = () => document.querySelector('[data-testid="SearchBox_Search_Input_label"]');

export const selectors = {
  getInputLabel,
  getInputWrapper: () => {
    const inputLabel = getInputLabel();
    return inputLabel.childNodes.item(1);
  },
  getInput: () => {
    return document.querySelector<HTMLInputElement>('[data-testid="SearchBox_Search_Input"]');
  }
};
