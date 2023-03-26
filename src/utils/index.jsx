export const ScrollTop = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  });
};

export const ScrollDown = () => {
  window.scrollBy({
    top: -window.innerHeight,
    behavior: 'smooth',
  });
};
