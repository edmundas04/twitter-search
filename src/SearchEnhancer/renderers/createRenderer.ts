interface IRendererOptions<T> {
  style: string,
  createElement(props: T): Element,
  removeExistingElement(): void;
  applyElement(newElement: Element): void;
}

export const createRenderer = <T>(options: IRendererOptions<T>) => {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = options.style;
  document.head.appendChild(styleSheet);

  return (state: Parameters<typeof options.createElement>[0]) => {
    const newElement = options.createElement(state);
    options.removeExistingElement();
    options.applyElement(newElement);
  };
};
