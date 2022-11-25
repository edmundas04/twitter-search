import { selectors } from '../selectors';
import { createRenderer } from './createRenderer';

export interface IToken {
  type: string,
  value: string
}

const TOKENS_CONTAINER_ID = 'tokens-container';

export const tokensRenderer = createRenderer({
  createElement: (state: IToken[]) => {
    const tokensContainer = document.createElement('div');
    tokensContainer.id = TOKENS_CONTAINER_ID;
    return tokensContainer;
  },
  removeExistingElement: () => {
    document.getElementById(TOKENS_CONTAINER_ID)?.remove();
  },
  applyElement: (newElement) => {
    const inputLabel = selectors.getInputLabel();
    const inputWrapper = selectors.getInputWrapper();

    inputLabel.insertBefore(newElement, inputWrapper);
  }
});
