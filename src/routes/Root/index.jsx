import React from 'react';
import {
  Outlet,
  // useLoaderData,
  // Form,
  // redirect,
  // NavLink,
  // Link,
  // useNavigation,
  // useSubmit,
} from 'react-router-dom';
import { LoadingOverlay } from '../../sections';

export const Root = () => {
  return (
    <div id="RouterRoot">
      <LoadingOverlay />
      <Outlet />
    </div>
  );
};
