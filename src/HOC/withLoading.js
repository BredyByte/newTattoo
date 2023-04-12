import React from 'react';
import NProgress from 'nprogress';
import { LoadingOverlay } from '../components';

export const withLoading = (Component) => {
  return function WithLoadingComponent(props) {
    const [loading, setLoading] = React.useState(true);
    const [isDeletedLoader, setIsDeletedLoader] = React.useState(true);

    React.useEffect(() => {
      window.onload = function () {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        setTimeout(() => {
          setIsDeletedLoader(false);
        }, 2000);
      };
    }, []);
    return (
      <>
        {isDeletedLoader && (
          <LoadingOverlay loading={loading} delete={isDeletedLoader} />
        )}
        <Component {...props} />
      </>
    );
  };
};
