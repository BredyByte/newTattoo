import React from 'react';
import styles from './NavArrows.module.scss';
import { ArrowBtn } from '../';
import { ScrollDown, ScrollTop } from '../../utils';

export const NavArrows = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    scrollTop > 50 ? setIsOpen(true) : setIsOpen(false);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`${styles.root} ${isOpen ? styles.isOpen : ''}`}>
      <ArrowBtn
        moving={false}
        onClickHandler={ScrollTop}
        additionalStyles={{ transform: 'rotate(180deg)', marginBottom: '40px' }}
      />
      <ArrowBtn moving={false} onClickHandler={ScrollDown} />
    </div>
  );
};
