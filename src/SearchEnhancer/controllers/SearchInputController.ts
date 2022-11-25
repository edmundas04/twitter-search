import { selectors } from '../selectors';

export class SearchInputController {
  private searchInput: HTMLInputElement;

  constructor() {
    this.searchInput = selectors.getInput();
  }

  public addChangeListener = (callback: (value: string) => void) => {
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
          callback(this.searchInput.value);
        }
      }
    });

    observer.observe(this.searchInput, { attributes: true, childList: false, subtree: false });
  };
}
