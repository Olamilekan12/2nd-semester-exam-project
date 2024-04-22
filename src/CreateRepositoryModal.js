// CreateRepositoryModal.js

import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@chakra-ui/react';

const CreateRepositoryModal = ({ isOpen, onClose }) => {
  const [repositoryName, setRepositoryName] = useState('');

  const handleCreateRepository = () => {
    
    console.log('Creating repository:', repositoryName);
    
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Repository</ModalHeader>
        <ModalBody>
          <input
            type="text"
            placeholder="Repository Name"
            value={repositoryName}
            onChange={(e) => setRepositoryName(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleCreateRepository}>
            Create
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateRepositoryModal;
