// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RepositoryList from './RepositoryList';
import RepositoryDetail from './RepositoryDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RepositoryList />
        </Route>
        <Route path="/repo/:id">
          <RepositoryDetail />
        </Route>
      </Switch>
    </Router>
    // src/App.js

import { Button } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Button}
        <Button colorScheme="blue" size="lg">
          Click me
        </Button>
      </header>
    </div>
  );
}

export default App;

  );
};

export default App;
