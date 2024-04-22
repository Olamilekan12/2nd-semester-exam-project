import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://api.github.com/users/Olamilekan12/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p data-testid="loading-message">Loading...</p>;
  }

  if (error) {
    return <p data-testid="error-message">Error: {error.message}</p>;
  }

  return (
    <div data-testid="repository-list">
      <h1>My GitHub Repositories</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
