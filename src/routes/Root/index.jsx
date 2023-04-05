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
import { CustomCursor, MenuBar } from '../../components';
import { useIsMobile } from '../../utils';

export const Root = () => {
  return (
    <div id="Root">
      <Outlet />
    </div>
  );
};
