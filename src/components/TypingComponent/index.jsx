import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import PropTypes from 'prop-types';

export const TypingComponent = ({ textSettings }) => {
  return (
    <TypeAnimation
      sequence={textSettings}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  );
};

TypingComponent.propTypes = {
  textSettings: PropTypes.array.isRequired,
};
