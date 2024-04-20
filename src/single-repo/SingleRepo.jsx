import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleRepo = () => {
  const { name } = useParams();
  console.log(name);
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/repos/Neche-Stephen/${name}`)
      .then(response => response.json())
      .then(data => {
        console.log('here', data)
        setRepo(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!repo) {
    return <div>Repository not found.</div>;
  }

  return (
    <div>
      <h2>Repository Details</h2>
      <p>Name: {repo.name}</p>
      <p>Description: {repo.description === null ? "No Description for this repo" : repo.description}</p>
      {/* Display other repository details as needed */}
    </div>
  );
};

export default SingleRepo;
