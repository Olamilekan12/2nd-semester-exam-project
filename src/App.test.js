
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RepositoryList component', () => {
  render(<App />);
  const repositoryListElement = screen.getByTestId('repository-list');
  expect(repositoryListElement).toBeInTheDocument();
});