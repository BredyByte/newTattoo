import React, { useEffect } from 'react';

import { Fancybox as NativeFancybox } from '@fancyapps/ui/dist/fancybox.esm.js';
import '@fancyapps/ui/dist/fancybox.css';
import PropTypes from 'prop-types';

export const Fancybox = (props) => {
  const delegate = props.delegate || '[data-fancybox]';

  useEffect(() => {
    const opts = props.options || {};

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return <>{props.children}</>;
};

Fancybox.propTypes = {
  delegate: PropTypes.bool,
  options: PropTypes.object,
  children: PropTypes.func,
};
