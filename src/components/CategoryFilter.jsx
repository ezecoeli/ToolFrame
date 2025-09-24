import React from 'react';
import { useTranslation } from '../hooks/useTranslations';
import { getCategoryName } from '../utils/constants';
import { BiGitBranch } from "react-icons/bi";

const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  className = '' 
}) => {
  const { t, language } = useTranslation();

  return (
    <div className={`${className}`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-east-bay-900 flex items-center">
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
              : 'text-east-bay-700 hover:bg-east-bay-100'
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
                : 'text-east-bay-700 hover:bg-east-bay-100'
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