import React from 'react';
import styles from './TitleHomeSections.module.scss';
import PropTypes from 'prop-types';

export const TitleHomeSections = ({ text, additionalStyles, index }) => {
  const ref = React.useRef();
  return (
    <h2 className={`${styles.title} secondaryFont`} style={additionalStyles}>
      {text}
    </h2>
  );
};

TitleHomeSections.propTypes = {
  text: PropTypes.string.isRequired,
  additionalStyles: PropTypes.object,
  index: PropTypes.number,
};
