// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RepositoryList from "./RepositoryList";
import RepositoryDetail from "./RepositoryDetail";
import ErrorBoundary from "./ErrorBoundary";
import NotFound from "./NotFound";
import CreateRepositoryModal from "./CreateRepositoryModal";

const App = () => {
  const [isModalOpen, setIsModalOpen]= useState(false);

  const openModal=() => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path="/" component={RepositoryList} />
          <Route path="/repo/:id" component={RepositoryDetail} />
          <Route component={NotFound} /> {/*Route for 404 page*/}
        </Switch>
      </Router>
      <CreateRepositoryModal isOpen={isModalOpen} onClose={closeModal} />
      <button onClick={openModal}>Create New Repository</button>
    </ErrorBoundary>
  );
};

export default App;
