import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslations';
import { getCategoryName } from '../utils/constants';
import { BiGitBranch } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";

const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange
}) => {
  const { t, language } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategorySelect = (category) => {
    onCategoryChange(category);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop - Sidebar normal */}
      <div className="hidden lg:block border-r-2 rounded-lg p-2 shadow-lg">
        <div className="mb-4">
          <h3 className="drop-shadow-lg text-xl font-bold text-east-bay-300 flex items-center">
            <BiGitBranch style={{ transform: 'rotate(180deg)' }} className="w-8 h-8 font-bold inline-block mr-2" />
            {t('categories')}
          </h3>
        </div>
        <div className="space-y-2">
          {/* All categories option */}
          <button
            onClick={() => handleCategorySelect('all')}
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
              onClick={() => handleCategorySelect(category)}
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

      {/* Mobile - Dropdown Menu */}
      <div className="lg:hidden mb-6">
        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full bg-east-bay-700 text-white px-4 py-3 rounded-lg flex items-center justify-between shadow-lg transition-colors duration-200 hover:bg-east-bay-600"
        >
          <div className="flex items-center">
            <BiGitBranch style={{ transform: 'rotate(180deg)' }} className="w-6 h-6 mr-3" />
            <span className="font-medium">
              {selectedCategory === 'all' 
                ? t('allCategories') 
                : getCategoryName(selectedCategory, language)
              }
            </span>
          </div>
          {isMenuOpen ? (
            <FaTimes className="w-4 h-4" />
          ) : (
            <FaBars className="w-4 h-4" />
          )}
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute z-50 mt-2 w-full bg-east-bay-800 rounded-lg shadow-xl border border-east-bay-600 overflow-hidden">
            <div className="max-h-64 overflow-y-auto">
              {/* All categories option */}
              <button
                onClick={() => handleCategorySelect('all')}
                className={`w-full text-left px-4 py-3 transition-colors duration-200 border-b border-east-bay-700 ${
                  selectedCategory === 'all'
                    ? 'bg-east-bay-500 text-white'
                    : 'text-white hover:bg-east-bay-600'
                }`}
              >
                {t('allCategories')}
              </button>

              {/* Category options */}
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`w-full text-left px-4 py-3 transition-colors duration-200 ${
                    index < categories.length - 1 ? 'border-b border-east-bay-700' : ''
                  } ${
                    selectedCategory === category
                      ? 'bg-east-bay-500 text-white'
                      : 'text-white hover:bg-east-bay-600'
                  }`}
                >
                  {getCategoryName(category, language)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryFilter;