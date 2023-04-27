import React, { useRef, useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import PropTypes from 'prop-types';

export const Fancybox = (props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || '[data-fancybox]';
    const options = props.options || {
      closeButton: true,
      commonCaption: true,
      dragToClose: false,
    };

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
};

Fancybox.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.object,
  delegate: PropTypes.bool,
};
