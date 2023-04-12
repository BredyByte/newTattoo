import React from 'react';
import NProgress from 'nprogress';
import { LoadingOverlay } from '../components';

export const withLoading = (Component) => {
  return function WithLoadingComponent(props) {
    const [loading, setLoading] = React.useState(true);
    const [isDeletedLoader, setIsDeletedLoader] = React.useState(true);

    React.useEffect(() => {
      window.addEventListener(
        'load',
        function () {
          alert('second alert');
        },
        false
      );
      // window.addEventListener('load', function () {
      //   setTimeout(() => {
      //     setLoading(false);
      //     setTimeout(() => {
      //       setIsDeletedLoader(false);
      //     }, 1000);
      //   }, 2000);
      // });
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
