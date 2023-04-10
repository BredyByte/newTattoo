import React from 'react';
import { TiltPage } from '../../components';
import PropTypes from 'prop-types';

export const TiltPageContainer = ({ isMobile }) => {
  return (
    <div
      id="TiltPageContainer"
      style={{
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
        scrollSnapAlign: 'center',
      }}
    >
      <TiltPage isMobile={isMobile} />
    </div>
  );
};

TiltPageContainer.propTypes = {
  isMobile: PropTypes.bool,
};
