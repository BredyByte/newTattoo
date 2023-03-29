import React from 'react';
import styles from './HomeSections.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import { TitleHomeSections } from '../../components';
import { presentationPageData } from '../../assets';
import { SquareBtn } from '../../components';

// function handleScrollDirection(direction) {
//   if (direction === 'down') {
//     scrollDown();
//   } else {
//     scrollTop();
//   }
// }

const Section = ({ img, title, index, btnText }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-60%', '0%']);
  return (
    <section ref={ref} className={styles.presentationSection}>
      <motion.div
        style={{
          y,
          backgroundImage: `url(${img})`,
        }}
        className={styles.background}
      />
      <div
        className={styles.content}
        style={index % 2 === 0 ? { right: '0' } : { left: '0' }}
      >
        <TitleHomeSections text={title} />
        <SquareBtn text={btnText} />
      </div>
    </section>
  );
};

export const HomeSections = ({ isMobile }) => {
  // let lastScrollTime = 0;
  // const scrollDelay = 500;
  //
  // const onWheelScroll = (event) => {
  //   const currentTime = Date.now();
  //   if (currentTime - lastScrollTime < scrollDelay) {
  //     event.preventDefault();
  //     return false;
  //   }
  //   lastScrollTime = currentTime;
  //   const direction = event.deltaY > 0 ? 'down' : 'up';
  //   handleScrollDirection(direction);
  // };

  React.useEffect(() => {
    if (!isMobile) document.querySelector('html').style.overflow = 'hidden';
    // window.addEventListener('wheel', onWheelScroll);
    return () => {
      if (!isMobile) document.querySelector('html').style.overflow = 'null';
      // window.removeEventListener('wheel', onWheelScroll);
    };
  }, []);
  return (
    <>
      {presentationPageData.map((obj, index) => (
        <Section
          key={index}
          img={obj.img}
          title={obj.title}
          index={index}
          btnText={obj.btnText}
        />
      ))}
    </>
  );
};

Section.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  btnText: PropTypes.string.isRequired,
};
HomeSections.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
