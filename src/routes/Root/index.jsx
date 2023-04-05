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
import { Preloader } from '../../sections';
import { useIsMobile } from '../../utils';

export const Root = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setIsLoaded(true), 3000);
  }, []);
  return <div id="Root">{isLoaded ? <Outlet /> : <Preloader />}</div>;
};
