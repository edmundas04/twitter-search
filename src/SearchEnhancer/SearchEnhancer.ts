import { SearchInputController } from './controllers/SearchInputController';
import { IToken, tokensRenderer } from './renderers';

interface ISearchEnhancerState {
  tokens: IToken[]
}

export class SearchEnhancer {
  private state: ISearchEnhancerState;
  private inputController: SearchInputController;

  constructor() {
    this.state = {
      tokens: [{type: 'from', value: '@elonMusk'}]
    };

    this.inputController = new SearchInputController();

    this.renderTokens();
    this.addSearchInputChangeListener();
  }

  private renderTokens = () => {
    tokensRenderer({
      tokens: this.state.tokens,
      onTokenRemove: this.handleTokenRemove,
    });
  };

  private addSearchInputChangeListener = () => {
    this.inputController.addChangeListener(this.handleSearchInputChange);
  };

  private handleSearchInputChange = (value: string) => {
    console.log('changed: ', value);
  };

  private handleTokenRemove = (token: IToken) => {
    this.state.tokens = this.state.tokens.filter(x => x.type !== token.type || x.value !== token.value);
    this.renderTokens();
  };
}
