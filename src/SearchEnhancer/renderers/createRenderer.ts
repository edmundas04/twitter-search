interface IRendererOptions<T> {
  style: string,
  createElement(props: T): Element,
  removeExistingElement(): void;
  applyElement(newElement: Element): void;
}

export const createRenderer = <T>({ style, createElement, removeExistingElement, applyElement }: IRendererOptions<T>) => {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = style;
  document.head.appendChild(styleSheet);

  return (state: Parameters<typeof createElement>[0]) => {
    const newElement = createElement(state);
    removeExistingElement();
    applyElement(newElement);
  };
};
