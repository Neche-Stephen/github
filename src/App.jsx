// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GithubRepositories from './github-repos/GithubRepos';
import SingleRepo from './single-repo/SingleRepo';
import NotFound from './notfound/NotFound';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import ErrorTestPage from './ErrorTestPage/ErrorTestPage';

const App = () => {
  return (
    <Router>
      <div>
        <h1>My GitHub Portfolio</h1>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<GithubRepositories />} />
            <Route path="/repo/:name" element={<SingleRepo />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/test-error" element={<ErrorTestPage />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
};

export default App;
