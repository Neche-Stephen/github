// ErrorBoundary.js
import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
      setHasError(true);
    };

    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  const handleComponentError = (error, errorInfo) => {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <div onError={handleComponentError}>
      {children}
    </div>
  );
};

export default ErrorBoundary;
