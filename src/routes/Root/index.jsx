import React from 'react';
import styles from './Root.module.scss';
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

export const Root = () => {
  return (
    <div id="RouterRoot">
      <Outlet />
    </div>
  );
};
