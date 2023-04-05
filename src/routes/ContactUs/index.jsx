import React from 'react';
import { Contacts } from '../../sections';
import { WithFooterBgWrapper } from '../../HOC';

export const ContactUs = () => {
  return (
    <>
      <WithFooterBgWrapper Component={Contacts} />
    </>
  );
};
