export const scrollDown = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  });
};

export const scrollTop = () => {
  window.scrollBy({
    top: -window.innerHeight,
    behavior: 'smooth',
  });
};

export const disableScroll = () => {
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.marginRight = scrollBarWidth + 'px';
  document.body.style.overflowY = 'hidden';
};

export const enableScroll = () => {
  document.body.style.marginRight = '';
  document.body.style.overflowY = 'auto';
};

export const useIsMobile = () => {
  const userAgent = typeof navigator === 'undefined' ? '' : navigator.userAgent;
  const mobileRegex =
    /Mobile|iPhone|iP(ad|od)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)|Blazer|Dolfin|(Series 60|SymbianOS|Nokia|iPh)OS|UCWEB/;
  return mobileRegex.test(userAgent) || window.innerWidth <= 768;
};
