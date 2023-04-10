import React from 'react';
import { WithFooterBgWrapper } from '../../HOC';
import { ServicesList } from '../../sections';

export const ServicesPage = () => {
  return (
    <>
      <WithFooterBgWrapper titleText="Our Services" Component={ServicesList} />
    </>
  );
};
