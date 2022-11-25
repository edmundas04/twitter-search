export const createElementFromHTML = (htmlString: string) => {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};
