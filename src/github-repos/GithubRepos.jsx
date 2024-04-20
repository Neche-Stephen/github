import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GithubRepositories = () => {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/Neche-Stephen/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>My GitHub Repositories</h2>
      <input
        type="text"
        placeholder="Search Repositories"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredRepos.map(repo => (
          <li key={repo.id}>
            {/* Link to SingleRepo component with repository ID as parameter */}
            <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubRepositories;
