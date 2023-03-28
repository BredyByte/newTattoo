export const ScrollDown = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  });
};

export const ScrollTop = () => {
  window.scrollBy({
    top: -window.innerHeight,
    behavior: 'smooth',
  });
};

export const isMobile = () => {
  const userAgent = typeof navigator === 'undefined' ? '' : navigator.userAgent;
  const mobileRegex =
    /Mobile|iPhone|iP(ad|od)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)|Blazer|Dolfin|(Series 60|SymbianOS|Nokia|iPh)OS|UCWEB/;
  return mobileRegex.test(userAgent) || window.innerWidth <= 620;
};
