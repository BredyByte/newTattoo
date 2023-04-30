import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  RootLayout,
  HomeLayout,
  ErrorLayout,
  ContactsLayout,
  ServicesLayout,
  WorksLayout,
  GalleryLayout,
} from './routes';

import { withLoading } from './HOC/withLoading';
import './styles/index.scss';

const HomePageWithLoading = withLoading(HomeLayout);
const ContactsPageWithLoading = withLoading(ContactsLayout);
const ServicesPageWithLoading = withLoading(ServicesLayout);
const WorksPageWithLoading = withLoading(WorksLayout);
const GalleryPageWithLoading = withLoading(GalleryLayout);

const router = createBrowserRouter([
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
            element: <ServicesPageWithLoading />,
          },
          {
            path: '/works',
            element: <WorksPageWithLoading />,
          },
          {
            // path: '/gallery',
            index: true,
            element: <GalleryPageWithLoading />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
