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
  AboutLayout,
} from '../routes';
import { createBrowserRouter } from 'react-router-dom';
import { servicesData, ourTeamData } from '../assets/data';

const HomePageWithLoading = withLoading(HomeLayout);
const ContactsPageWithLoading = withLoading(ContactsLayout);
const ServicesPageWithLoading = withLoading(ServicesLayout);
const GalleryPageWithLoading = withLoading(GalleryLayout);
const OurTeamListPageWithLoading = withLoading(OurTeamListLayout);
const AboutPageWithLoading = withLoading(AboutLayout);

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
            // index: true,
            path: '/home',
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
            path: '/services/gallery/:galleryId',
            element: <GalleryPageWithLoading data={servicesData} />,
          },
          {
            path: '/team',
            element: <OurTeamListPageWithLoading data={ourTeamData} />,
          },
          {
            path: '/team/gallery/:galleryId',
            element: <GalleryPageWithLoading data={ourTeamData} />,
          },
          {
            // path: '/about',
            index: true,
            element: <AboutPageWithLoading />,
          },
        ],
      },
    ],
  },
]);
