import React, { useState, useEffect } from 'react';
import NProgress from 'nprogress';

export const withLoading = (Component) => {
  return function WithLoadingComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      NProgress.start();
      Promise.all([fetch('/path/to/resource1'), fetch('/path/to/resource2')])
        .then(() => {
          NProgress.done();
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        })
        .catch((error) => {
          console.error(error);
        });
      return () => {
        NProgress.done();
      };
    }, []);
    return (
      <>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'black',
            display: `${loading ? 'flex' : 'none'}`,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <span style={{ color: '#fff' }}>Loading...</span>
        </div>
        <Component {...props} />
      </>
    );
  };
};
