
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    
    fetch('https://api.github.com/users/Olamilekan12/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
      .catch(error => console.error('Error fetching repositories:', error));
  }, []);

  return (
    <div>
      <h1>My GitHub Repositories</h1>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
