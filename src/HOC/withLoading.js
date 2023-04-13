import React from 'react';
import NProgress from 'nprogress';
import { LoadingOverlay } from '../components';

export const withLoading = (Component) => {
  return function PropComponent(props) {
    const [loading, setLoading] = React.useState(true);
    const [isDeletedLoader, setIsDeletedLoader] = React.useState(true);

    React.useEffect(() => {
      const onPageLoad = () => {
        setTimeout(() => {
          setLoading(false);
          setTimeout(() => {
            setIsDeletedLoader(false);
          }, 1000);
        }, 2000);
      };
      if (document.readyState === 'complete') {
        onPageLoad();
      } else {
        window.addEventListener('load', onPageLoad, false);
        return () => window.removeEventListener('load', onPageLoad);
      }
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
