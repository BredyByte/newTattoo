import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root, Home, ContactUs, ErrorPage } from './routes';

import './styles/index.scss';
import { OurServices } from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            // index: true,
            path: '/home',
            element: <Home />,
          },
          {
            path: '/contacts',
            element: <ContactUs />,
          },
          {
            index: true,
            element: <OurServices />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
