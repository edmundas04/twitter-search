import { createElementFromHTML } from 'src/common/helpers/createElementFromString';
import { selectors } from '../selectors';
import { createRenderer } from './createRenderer';
import { tokensStyle } from './tokensStyle';

export interface IToken {
  type: string,
  value: string
}

export interface ITokensProps {
  tokens: IToken[];
  onTokenRemove(token: IToken): void;
}

const TOKENS_CONTAINER_ID = 'tokens-container';

const getTokenElement = (token: IToken, onTokenRemove: ITokensProps['onTokenRemove']) => {
  const tokenElement = createElementFromHTML('<div class="tokenContainer"></div>');
  tokenElement.appendChild(createElementFromHTML(`<span>${token.type}: ${token.value}</span>`));

  const removeIconElement = createElementFromHTML(`
    <svg class="removeIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="10" height="10" viewBox="0 0 256 256" xml:space="preserve">
      <defs>
      </defs>
      <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
        <path d="M 3 90 c -0.768 0 -1.536 -0.293 -2.121 -0.879 c -1.172 -1.171 -1.172 -3.071 0 -4.242 l 84 -84 c 1.172 -1.172 3.07 -1.172 4.242 0 c 1.172 1.171 1.172 3.071 0 4.242 l -84 84 C 4.536 89.707 3.768 90 3 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
        <path d="M 87 90 c -0.768 0 -1.535 -0.293 -2.121 -0.879 l -84 -84 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.171 -1.172 3.071 -1.172 4.242 0 l 84 84 c 1.172 1.171 1.172 3.071 0 4.242 C 88.535 89.707 87.768 90 87 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      </g>
    </svg>
  `);

  removeIconElement.addEventListener('click', () => {
    onTokenRemove(token);
  });

  tokenElement.appendChild(removeIconElement);

  return tokenElement;
};

export const tokensRenderer = createRenderer({
  style: tokensStyle,
  createElement: (props: ITokensProps) => {
    const tokensContainer = document.createElement('div');
    tokensContainer.id = TOKENS_CONTAINER_ID;
    tokensContainer.className = 'tokensContainer';
    props.tokens.forEach((token) => {
      tokensContainer.appendChild(getTokenElement(token, props.onTokenRemove));
    });
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
