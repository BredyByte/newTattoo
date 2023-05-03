import React from 'react';
import styles from './HomeSections.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import { Title } from '../../components';
import { homePageData } from '../../assets/data';
import { SquareBtn } from '../../components';
import { Link } from 'react-router-dom';

const HomeSectionItem = ({ img, title, index, btnText, isMobile, link }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile ? ['end start', 'end end'] : ['start end', 'end end'],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ['20%', '0%'] : ['-80%', '0%']
  );
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
        <Title text={title} />
        <Link to={link}>
          <SquareBtn text={btnText} />
        </Link>
      </div>
    </section>
  );
};

export const HomeSections = ({ isMobile }) => {
  React.useEffect(() => {
    if (!isMobile) document.querySelector('html').style.overflow = 'hidden';
    return () => {
      if (!isMobile) document.querySelector('html').style.overflow = null;
    };
  }, []);
  return (
    <>
      {homePageData.map((obj, index) => (
        <HomeSectionItem
          key={index}
          img={obj.img}
          title={obj.title}
          index={index}
          btnText={obj.btnText}
          isMobile={isMobile}
          link={obj.link}
        />
      ))}
    </>
  );
};

HomeSectionItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  btnText: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
};
HomeSections.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
