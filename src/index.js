import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Root,
  HomePage,
  ContactsPage,
  ErrorPage,
  ServicesPage,
} from './routes';

import './styles/index.scss';

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
            index: true,
            element: <HomePage />,
          },
          {
            path: '/contacts',
            element: <ContactsPage />,
          },
          {
            path: '/services',
            element: <ServicesPage />,
          },
        ],
      },
    ],
  },
]);

const App = () => {};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
