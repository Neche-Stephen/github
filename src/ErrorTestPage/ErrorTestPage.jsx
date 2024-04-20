// ErrorTestPage.js
import React, { useEffect } from 'react';

const ErrorTestPage = () => {
  useEffect(() => {
    // Intentionally causing an error after a delay
    setTimeout(() => {
      throw new Error('This is a test error');
    }, 1000);
  }, []);

  return <div>This page will trigger an error after a delay.</div>;
};

export default ErrorTestPage;
