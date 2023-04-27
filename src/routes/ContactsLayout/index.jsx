import React from 'react';
import { Contacts } from '../../sections';
import { withBgTitleFooterMenu } from '../../HOC/withBgTitleFooterMenu';

export const ContactsLayout = withBgTitleFooterMenu(
  Contacts,
  'Contacts',
  false
);
