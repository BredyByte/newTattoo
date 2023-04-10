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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
