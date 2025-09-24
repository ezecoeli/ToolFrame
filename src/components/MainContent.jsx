import React from 'react';
import SearchBar from './SearchBar';
import ToolGrid from './ToolGrid';
import CategoryFilter from './CategoryFilter';
import { useTranslation } from '../hooks/useTranslations';

const MainContent = ({ 
  tools, 
  searchTerm, 
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  onDeleteTool,
  onAddTool
}) => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <div className="flex items-center flex-1">
            <img 
              src="/src/assets/TF-logo.png" 
              alt="ToolFrame"
              className="h-20 w-auto mr-4"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            
            <div>
              <p className="text-east-bay-800 text-lg">
                {t('logoDescription')}
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar with Add Button */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          onAddTool={onAddTool}
          className="mb-6"
        />
      </div>

      {/* Content Grid */}
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />
        </aside>

        {/* Main Grid */}
        <div className="flex-1">
          <ToolGrid
            tools={tools}
            onDeleteTool={onDeleteTool}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;