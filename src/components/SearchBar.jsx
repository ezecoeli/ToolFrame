import React, { useState } from 'react';
import { FaSearch, FaPlus, FaTimes } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslations';

const SearchBar = ({ searchTerm, onSearchChange, onAddTool, className = '' }) => {
  const { t } = useTranslation();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div className="flex gap-4 items-center">
        {/* Search Input */}
        <div className="max-w-[250px] relative flex-1">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-east-bay-500 w-5 h-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={isFocused ? '' : t('search')}
            className="w-full pl-12 pr-10 py-2 text-lg border border-east-bay-300 rounded-lg focus:ring-2 focus:ring-east-bay-500 outline-none transition-all duration-200 bg-white"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-east-bay-400 hover:text-east-bay-700"
              aria-label={t('clearSearch')}
            >
              <FaTimes className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Add Tool Button */}
        <button
          onClick={onAddTool}
          className="bg-east-bay-600 border border-east-bay-400 hover:bg-east-bay-700 text-white shadow-lg px-2 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 text-lg font-medium whitespace-nowrap"
        >
          <FaPlus className="w-4 h-4" />
          {t('addButton')}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;