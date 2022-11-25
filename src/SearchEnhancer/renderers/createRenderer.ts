interface IRendererOptions<T> {
  createElement(state: T): Element,
  removeExistingElement(): void;
  applyElement(newElement: Element): void;
}

export const createRenderer = <T>(options: IRendererOptions<T>) => {
  return (state: Parameters<typeof options.createElement>[0]) => {
    const newElement = options.createElement(state);
    options.removeExistingElement();
    options.applyElement(newElement);
  };
};
