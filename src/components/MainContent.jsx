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
    <div className="px-6 py-8 max-w-none">
      {/* Header */}
      <div className="mb-12">
        <div className="flex flex-col sm:flex-row items-center flex-1 mb-8">
          <img 
            src="/src/assets/TF-logo-light.png" 
            alt="ToolFrame"
            className="h-16 sm:h-20 w-auto mb-4 sm:mb-0 sm:mr-4 drop-shadow-lg"
            style={{
              filter: 'drop-shadow(40px 40px 40px rgba(4,5,6,0.5))'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          
          <div className="text-center sm:text-left">
            <p className="text-east-bay-200 text-base sm:text-lg font-medium drop-shadow-md">
              {t('logoDescription')}
            </p>
          </div>
        </div>

        {/* Search Bar with Add Button */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          onAddTool={onAddTool}
        />
      </div>

      {/* Mobile Category Filter */}
      <div className="lg:hidden relative">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
      </div>

      {/* Content Grid */}
      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
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