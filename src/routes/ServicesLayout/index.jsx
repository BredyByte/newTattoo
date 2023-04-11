import React from 'react';
import { WithFooterBgWrapper } from '../../HOC';
import { ServicesList } from '../../sections';

export const ServicesLayout = () => {
  return (
    <>
      <WithFooterBgWrapper titleText="Our Services" Component={ServicesList} />
    </>
  );
};
