import React from 'react';
import { withLoading } from '../HOC/withLoading';
import {
  HomeLayout,
  ContactsLayout,
  ServicesLayout,
  GalleryLayout,
  ErrorLayout,
  OurTeamListLayout,
  RootLayout,
} from '../routes';
import { createBrowserRouter } from 'react-router-dom';
import { servicesData, ourTeamData } from '../assets/data';

const HomePageWithLoading = withLoading(HomeLayout);
const ContactsPageWithLoading = withLoading(ContactsLayout);
const ServicesPageWithLoading = withLoading(ServicesLayout);
const GalleryPageWithLoading = withLoading(GalleryLayout);
const OurTeamListPageWithLoading = withLoading(OurTeamListLayout);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        errorElement: <ErrorLayout />,
        children: [
          {
            index: true,
            element: <HomePageWithLoading />,
          },
          {
            path: '/contacts',
            element: <ContactsPageWithLoading />,
          },
          {
            path: '/services',
            element: <ServicesPageWithLoading data={servicesData} />,
          },
          {
            path: '/team',
            element: <OurTeamListPageWithLoading data={ourTeamData} />,
          },
          {
            path: '/gallery/:galleryId',
            element: <GalleryPageWithLoading />,
          },
        ],
      },
    ],
  },
]);
