import React from 'react';
import styles from './PresentationPage.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import { Title } from '../../components';
import { presentationPageData } from '../../assets';
import bg from '../../assets/img/firstPageBg1.png';

function handleScrollDirection(direction) {
  if (direction === 'down') {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  } else {
    window.scrollBy({
      top: -window.innerHeight,
      behavior: 'smooth',
    });
  }
}

const Image = ({ img, title }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start', 'end start'],
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-50%', '0%']);
  return (
    <section ref={ref}>
      <motion.div
        style={{
          y,
          backgroundImage: `url(${img})`,
        }}
        className={styles.background}
      />
      <div className={styles.content}>
        {/*<img src={`${id}`} alt="A London skyscraper" />*/}
      </div>
      <h2 className={styles.numbers}>
        <Title text={title} />
      </h2>
    </section>
  );
};

export const PresentationPage = () => {
  const onWheelScroll = (event) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? 'down' : 'up';
    handleScrollDirection(direction);
  };
  React.useEffect(() => {
    document.querySelector('html').style.overflow = 'hidden';
    window.addEventListener('wheel', onWheelScroll);
    return () => {
      document.querySelector('html').style.overflow = 'null';
      window.removeEventListener('wheel', onWheelScroll);
    };
  }, []);
  return (
    <>
      <div
        className={styles.first}
        style={{
          scrollSnapAlign: 'center',
          minHeight: '100vh',
          width: '100%',
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      {presentationPageData.map((obj, index) => (
        <Image key={index} img={obj.img} title={obj.title} />
      ))}
    </>
  );
};

Image.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
