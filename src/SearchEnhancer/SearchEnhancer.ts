import { IToken, tokensRenderer } from './renderers';

interface ISearchEnhancerState {
  tokens: IToken[]
}

export class SearchEnhancer {
  state: ISearchEnhancerState;

  constructor() {
    this.state = {
      tokens: [{type: 'from', value: '@elonMusk'}]
    };

    this.renderTokens();
  }

  private renderTokens = () => {
    tokensRenderer({
      tokens: this.state.tokens,
      onTokenRemove: this.handleTokenRemove,
    });
  };

  private handleTokenRemove = (token: IToken) => {
    this.state.tokens = this.state.tokens.filter(x => x.type !== token.type || x.value !== token.value);
    this.renderTokens();
  };
}
