import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import AddToolModal from './components/AddToolModal';
import { useTools } from './hooks/useTools';
import { LanguageProvider } from './hooks/useTranslations';

function App() {
  const {
    tools: filteredTools,
    allTools: tools,
    searchTerm,
    setSearchTerm,
    allCategories: categories,
    selectedCategory,
    setSelectedCategory,
    addTool,
    removeTool: deleteTool 
  } = useTools();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddTool = () => {
    setIsAddModalOpen(true);
  };

  const handleSaveTool = (toolData) => {
    addTool(toolData);
    setIsAddModalOpen(false);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-east-bay-800">
        {/* Fixed Header */}
        <Header />

        <div className="pt-16">
          <MainContent
            tools={filteredTools}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onDeleteTool={deleteTool}
            onAddTool={handleAddTool}
          />
        </div>

        <AddToolModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleSaveTool}
        />
      </div>
    </LanguageProvider>
  );
}

export default App;