// RepositoryList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Olamilekan12/repos');
        setRepositories(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div>
      <h1>My Repositories</h1>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};


const [page, setPage] = useState(1);
const perPage = 10; // Number of repositories per page

const handleClickNext = () => {
  setPage(page + 1);
};

const handleClickPrev = () => {
  setPage(page - 1);
};

const paginatedRepositories = repositories.slice((page - 1) * perPage, page * perPage);

return (
  <div>
    <h1>My Repositories</h1>
    <ul>
      {paginatedRepositories.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
    <button onClick={handleClickPrev} disabled={page === 1}>Prev</button>
    <button onClick={handleClickNext} disabled={page === Math.ceil(repositories.length / perPage)}>Next</button>
  </div>
);

export default RepositoryList;
