import React, { useState, useEffect } from 'react';

export const LoadingOverlay = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    window.addEventListener('load', () => {
      setTimeout(() => setIsLoading(false), 3000);
    });
    return () => {
      window.removeEventListener('load', () => {
        setTimeout(() => setIsLoading(false), 3000);
      });
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'Black',
        display: isLoading ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <span style={{ color: '#fff' }}>Loading...</span>
    </div>
  );
};
