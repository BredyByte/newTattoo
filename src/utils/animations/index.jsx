export const fromBottomAnimation = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const scaleAnimation = {
  hidden: { scale: 0, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

export const xToRightAnimation = {
  hidden: { x: -200, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const xToLeftAnimation = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const navAnimation = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 1, opacity: 1 },
};

export const textFromRightAppearance = (delay = 0.2, duration = 0.4) => ({
  hidden: {
    right: '-50%',
  },
  show: {
    right: '0px',
    transition: {
      duration,
      type: 'tween',
      delay,
    },
  },
});

export const textFromLeftAppearance = (delay = 0.2, duration = 0.4) => ({
  hidden: {
    left: '-50%',
  },
  show: {
    left: '0px',
    transition: {
      duration,
      type: 'tween',
      delay,
    },
  },
});

export const textFromBottomAppearance = (delay = 0.2, duration = 0.4) => ({
  offscreen: {
    top: '-100px',
  },
  onscreen: {
    top: '0px',
    transition: {
      duration,
      type: 'tween',
      delay,
    },
  },
});
