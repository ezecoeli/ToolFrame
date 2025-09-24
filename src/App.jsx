import React, { useState } from 'react';
import MainContent from './components/MainContent';
import AddToolModal from './components/AddToolModal';
import { useTools } from './hooks/useTools';

function App() {
  const {
    tools,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    removeTool,
    addTool,
    allCategories
  } = useTools();

  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddTool = () => {
    setShowAddModal(true);
  };

  const handleSaveTool = (newTool) => {
    addTool(newTool);
  };

  return (
    <>
      
      <MainContent
        tools={tools}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        categories={allCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onDeleteTool={removeTool}
        onAddTool={handleAddTool}
      />
      
      <AddToolModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleSaveTool}
      />
    </>
  );
}

export default App;
