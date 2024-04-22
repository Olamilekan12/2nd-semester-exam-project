// RepositoryDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RepositoryDetail = () => {
  const { id } = useParams();
  const [repository, setRepository] = useState(null);

  useEffect(() => {
    
    fetch(`https://api.github.com/repos/Olamilekan12/${id}`)
      .then(response => response.json())
      .then(data => setRepository(data))
      .catch(error => console.error('Error fetching repository details:', error));
  }, [id]);

  return (
    <div>
      {repository ? (
        <div>
          <h2>{repository.name}</h2>
          <p>{repository.description}</p>
          <p>Stars: {repository.stargazers_count}</p>
          <p>Language: {repository.language}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RepositoryDetail;
