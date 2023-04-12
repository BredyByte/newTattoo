import React from 'react';
import { Contacts } from '../../sections';
import { WithFooterBgWrapper } from '../../HOC';

export const ContactsLayout = () => {
  return (
    <>
      <WithFooterBgWrapper Component={Contacts} titleText="Contacts" />
    </>
  );
};