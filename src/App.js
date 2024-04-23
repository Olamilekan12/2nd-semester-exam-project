import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RepositoryList from "./RepositoryList";
import RepositoryDetail from "./RepositoryDetail";
import ErrorBoundary from "./ErrorBoundary";
import NotFound from "./NotFound";
import CreateRepositoryModal from "./CreateRepositoryModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
        <Route
          exact
          path="/"
          render={(props) => <RepositoryList {...props} />}
        />
        <Route
          path="/repo/:id"
          render={(props) => <RepositoryDetail {...props} />}
        />
        <Route component={NotFound} /> {/* Route for 404 page */}
        </Routes>
      </Router>
      <CreateRepositoryModal isOpen={isModalOpen} onClose={closeModal} />
      <button onClick={openModal}>Create New Repository</button>
    </ErrorBoundary>
  );
};

export default App;
