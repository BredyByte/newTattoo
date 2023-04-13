import React from 'react';
import { withBgTitleFooterMenu } from '../../HOC/withBgTitleFooterMenu';
import { ServicesList } from '../../sections';

export const ServicesLayout = withBgTitleFooterMenu(
  ServicesList,
  'Our Services'
);
