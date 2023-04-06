import React from 'react';
import styles from './OurServices.module.scss';
import { WithFooterBgWrapper } from '../../HOC';
import { Services } from '../../sections';

export const OurServices = () => {
  return (
    <>
      <WithFooterBgWrapper titleText="Our Services" Component={Services} />
    </>
  );
};
