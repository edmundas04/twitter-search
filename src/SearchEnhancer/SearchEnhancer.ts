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

    this.setTokens();
  }

  private setTokens() {
    tokensRenderer(this.state.tokens);
  }
}
