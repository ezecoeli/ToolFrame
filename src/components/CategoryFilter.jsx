import React from 'react';
import { useTranslation } from '../hooks/useTranslations';
import { getCategoryName } from '../utils/constants';
import { BiGitBranch } from "react-icons/bi";

const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange
}) => {
  const { t, language } = useTranslation();

  return (
    <div className="border-r-2 rounded-lg p-2 shadow-lg">
      <div className="mb-4">
        <h3 className="text-xl  font-bold text-east-bay-300 flex items-center">
          <BiGitBranch style={{ transform: 'rotate(180deg)' }} className="w-8 h-8 font-bold inline-block mr-2" />
          {t('categories')}
        </h3>
      </div>
      <div className="space-y-2">
        {/* All categories option */}
        <button
          onClick={() => onCategoryChange('all')}
          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
            selectedCategory === 'all'
              ? 'bg-east-bay-500 text-white'
              : 'text-white hover:bg-east-bay-500'
          }`}
        >
          {t('allCategories')}
        </button>

        {/* Category options */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
              selectedCategory === category
                ? 'bg-east-bay-500 text-white'
                : 'text-white hover:bg-east-bay-500'
            }`}
          >
            {getCategoryName(category, language)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;