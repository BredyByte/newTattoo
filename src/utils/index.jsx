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
  document.querySelector('html').style.marginRight = scrollBarWidth + 'px';
  document.querySelector('html').style.overflowY = 'hidden';
};

export const enableScroll = () => {
  document.querySelector('html').style.marginRight = '';
  document.querySelector('html').style.overflowY = 'auto';
};

export const useIsMobile = () => {
  const userAgent = typeof navigator === 'undefined' ? '' : navigator.userAgent;
  const mobileRegex =
    /Mobile|iPhone|iP(ad|od)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)|Blazer|Dolfin|(Series 60|SymbianOS|Nokia|iPh)OS|UCWEB/;
  return mobileRegex.test(userAgent) || window.innerWidth <= 768;
};
